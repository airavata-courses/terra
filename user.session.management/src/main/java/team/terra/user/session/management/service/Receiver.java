package team.terra.user.session.management.service;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;

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
			byte[] byteArray = delivery.getBody();

			try {
				UserActivityRequest userActivityRequest = (UserActivityRequest) deserialize(byteArray);
				System.out.println(" [x] Received '" + userActivityRequest.tokenId + "'");
				userService.postUserActivityService(userActivityRequest);

			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			}

		};
		channel.basicConsume(QUEUE_NAME, true, deliverCallback, consumerTag -> {
		});

	}

	private Object deserialize(byte[] byteArray) throws IOException, ClassNotFoundException {
		ByteArrayInputStream in = new ByteArrayInputStream(byteArray);
		ObjectInputStream is = new ObjectInputStream(in);
		return is.readObject();
	}

}
