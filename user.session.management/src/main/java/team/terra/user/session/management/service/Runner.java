/*
 * package team.terra.user.session.management.service;
 * 
 * import java.io.ByteArrayOutputStream; import java.io.IOException; import
 * java.io.ObjectOutputStream;
 * 
 * import org.springframework.boot.CommandLineRunner; import
 * org.springframework.stereotype.Component;
 * 
 * import com.rabbitmq.client.Channel; import com.rabbitmq.client.Connection;
 * import com.rabbitmq.client.ConnectionFactory;
 * 
 * import team.terra.user.session.management.model.request.UserActivityRequest;
 * 
 * @Component public class Runner implements CommandLineRunner {
 * 
 * @Override public void run(String... args) throws Exception {
 * 
 * final String QUEUE_NAME = "user-activity";
 * 
 * ConnectionFactory factory = new ConnectionFactory();
 * 
 * Here we connect to a broker on the local machine - hence the localhost. If we
 * wanted to connect to a broker on a different machine we'd simply specify its
 * name or IP address here.
 * 
 * factory.setHost("localhost"); try (Connection connection =
 * factory.newConnection(); Channel channel = connection.createChannel())
 * 
 * { channel.queueDeclare(QUEUE_NAME, false, false, false, null);
 * 
 * UserActivityRequest userActivityRequest = new UserActivityRequest();
 * userActivityRequest.userId = "1"; userActivityRequest.tokenId = "test-token";
 * userActivityRequest.typeOfSearch = "test-typeofsearch";
 * userActivityRequest.searchParam = "test-searchParam";
 * userActivityRequest.searchOutput = "test-searchOutput"; byte[] byteArray =
 * getByteArray(userActivityRequest);
 * 
 * channel.basicPublish("", QUEUE_NAME, null, byteArray);
 * System.out.println(" [x] Sent '" + userActivityRequest + "'"); } catch
 * (Exception exe) { exe.printStackTrace(); } }
 * 
 * private byte[] getByteArray(UserActivityRequest userActivityRequest) throws
 * IOException { ByteArrayOutputStream out = new ByteArrayOutputStream();
 * ObjectOutputStream os = new ObjectOutputStream(out);
 * os.writeObject(userActivityRequest); return out.toByteArray(); }
 * 
 * }
 */