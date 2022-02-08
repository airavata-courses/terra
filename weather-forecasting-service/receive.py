import pika
import requests
import json 

# Connect to a RabbitMQ Server
class RabbitMQServer(object):

    def __init__(self):

        self.connection = pika.BlockingConnection(
            pika.ConnectionParameters(host='rabbitmq'))
        self.channel = self.connection.channel()
        self.channel.queue_declare(queue='rpc_queue')
        self.channel.basic_qos(prefetch_count=1)
        self.channel.basic_consume(queue='rpc_queue', on_message_callback=self.on_request)
        print(" [x] Awaiting RPC requests for weather prediction")
        self.channel.start_consuming()
    
    def on_request(self,ch, method, props, body):
            
        response = get_weather(body)

        ch.basic_publish(exchange='',
                        routing_key=props.reply_to,
                        properties=pika.BasicProperties(correlation_id = \
                                                            props.correlation_id),
                        body=response)
        ch.basic_ack(delivery_tag=method.delivery_tag)

        

# connection = pika.BlockingConnection(
#     pika.ConnectionParameters(host='rabbitmq'))

# channel = connection.channel()

# channel.queue_declare(queue='rpc_queue')
api_key = 'b5bf85707236f12bdd7e68710fe6304b'

def get_weather(body):    
    body = body.decode()
    print(body)
    body = json.loads(body)
    print(body)
    lat = body['lat']
    lon = body['lon']
    data = requests.get('https://api.openweathermap.org/data/2.5/weather?lat={}&lon={}&units=imperial&appid={}'.format(lat,lon,api_key))
    data = data.json()
    out  = {}
    out['temp_min'] = data['main']['temp_min']
    out['temp_max'] = data['main']['temp_max']
    out['pressure'] = data['main']['pressure']
    out['humidity'] = data['main']['humidity']
    out['weather'] = data['weather'][0]['main']
    out['weather_description'] = data['weather'][0]['description']
    out = json.dumps(out)
    return out

server = RabbitMQServer()

# def on_request(ch, method, props, body):
    
    
#     response = get_weather(body)

#     ch.basic_publish(exchange='',
#                      routing_key=props.reply_to,
#                      properties=pika.BasicProperties(correlation_id = \
#                                                          props.correlation_id),
#                      body=response)
#     ch.basic_ack(delivery_tag=method.delivery_tag)

# channel.basic_qos(prefetch_count=1)
# channel.basic_consume(queue='rpc_queue', on_message_callback=on_request)

# print(" [x] Awaiting RPC requests for weather prediction")
# channel.start_consuming()