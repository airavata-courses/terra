package team.terra.user.session.management.service;

import java.nio.charset.StandardCharsets;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DeliverCallback;

import team.terra.user.session.management.model.request.UserActivityRequest;

@Component
public class Receiver implements CommandLineRunner {
	private final static String QUEUE_NAME = "user-activity";
	UserActivityRequest userActivityRequest = new UserActivityRequest();
	@Autowired
	UserService userService = new UserService();

	@Override
	public void run(String... args) throws Exception {
		ConnectionFactory factory = new ConnectionFactory();
		factory.setHost("rabbitmq");
		Connection connection = factory.newConnection();
		Channel channel = connection.createChannel();

		channel.queueDeclare(QUEUE_NAME, false, false, false, null);
		System.out.println(" [*] Waiting for messages. To exit press CTRL+C");

		DeliverCallback deliverCallback = (consumerTag, delivery) -> {
            String message = new String(delivery.getBody(), StandardCharsets.UTF_8);
            JSONParser jsonParser = new  JSONParser();
            try {
                JSONObject userObject = (JSONObject) jsonParser.parse(message);
                System.out.println(userObject);
                userActivityRequest.userId =  userObject.get("userId").toString();
                userActivityRequest.typeOfSearch =  userObject.get("typeOfSearch").toString();
                userActivityRequest.searchOutput =  userObject.get("searchOutput").toString();
                userActivityRequest.tokenId =  userObject.get("tokenId").toString();
                userActivityRequest.searchParam =  userObject.get("searchParam").toString();
                userService.postUserActivityService(userActivityRequest);
                
               
               
            }catch (Exception err){
                System.out.println(" [x] Error Occurred" + err.toString() );
            }

        };
        channel.basicConsume(QUEUE_NAME, true, deliverCallback, consumerTag -> {
    		});

	}
}
