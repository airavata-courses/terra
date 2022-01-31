import pika
import uuid


class WeatherRpcClient(object):

    """Create a Pika RPC client that communicates with RabbitMQ server"""

    def __init__(self):
        # Create a blocking connection and host as rabbitmq. 
        # The host name should be the same name of the rabbitmq server that is running
        self.connection = pika.BlockingConnection(
            pika.ConnectionParameters(host='rabbitmq'))
        # Create a channel
        self.channel = self.connection.channel()
        # declare a queue
        result = self.channel.queue_declare(queue='', exclusive=True)
        
        self.callback_queue = result.method.queue
        # When ever you get a response back, return the message 
        self.channel.basic_consume(
            queue=self.callback_queue,
            on_message_callback=self.on_response,
            auto_ack=True)


    def on_response(self, ch, method, props, body):
        # if the data we got is matching with the same correlation id. Then update the response
        # This is important because multiple requests can be sent to the server by the same client.
        # We need to properly route the request to the correct client as soon as the response is available.
        # TODO: Need to verify my understanding
        if self.corr_id == props.correlation_id:
            self.response = body

    def call(self, n):
        self.response = None
        # Generate some random id
        self.corr_id = str(uuid.uuid4())
        # publish the message on the channel
        # Client sending a request to the server, with the data in the rpc_queue
        self.channel.basic_publish(
            exchange='',
            routing_key='rpc_queue',
            properties=pika.BasicProperties(
                reply_to=self.callback_queue,
                correlation_id=self.corr_id,
            ),
            body=str(n))
        # Continue the execution unitl you receive a response.
        while self.response is None:
            self.connection.process_data_events()
        # return the response.
        return self.response
