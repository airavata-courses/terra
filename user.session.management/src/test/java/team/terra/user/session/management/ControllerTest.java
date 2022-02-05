package team.terra.user.session.management;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.Random;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import team.terra.user.session.management.model.request.UserActivityRequest;
import team.terra.user.session.management.model.request.UserLogRequest;
import team.terra.user.session.management.model.request.UserRequestModel;

public class ControllerTest extends ApplicationTest {
	
	@Override
	@Before
	public void setUp() {
	   super.setUp();
	}
	
	@Test
	public void  userDataTestNewUser() throws Exception{
		
		Random r = new Random();
		char c = (char)(r.nextInt(26) + 'a');
		
		String uri = "/user/data";
		System.out.println(uri);
	      UserRequestModel requestModel = new UserRequestModel();
	      requestModel.name = "Name_test"+c;
	      requestModel.email = "Test@test.com"+c;
	      String inputJson = super.mapToJson(requestModel);
	      MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post(uri)
	         .contentType(MediaType.APPLICATION_JSON_VALUE)
	         .content(inputJson)).andReturn();
	      
	      int status = mvcResult.getResponse().getStatus();
	      assertEquals(200, status);
	      String content = mvcResult.getResponse().getContentAsString();
	      assertNotNull(content);
		
	}
	
	@Test
	public void  userDataTestOldUser() throws Exception{
		
		String uri = "/user/data";
		System.out.println(uri);
	      UserRequestModel requestModel = new UserRequestModel();
	      requestModel.name = "Name_test";
	      requestModel.email = "Test@test.com";
	      String inputJson = super.mapToJson(requestModel);
	      MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post(uri)
	         .contentType(MediaType.APPLICATION_JSON_VALUE)
	         .content(inputJson)).andReturn();
	      
	      int status = mvcResult.getResponse().getStatus();
	      assertEquals(200, status);
	      String content = mvcResult.getResponse().getContentAsString();
	      assertNotNull(content);
	}
	
	@Test
	public void userLogTest() throws Exception{
		
		String uri = "/user/log";
		UserLogRequest activityRequest = new UserLogRequest();
		activityRequest.userId = "1";
		activityRequest.tokenID = "token";
		activityRequest.activity = "login";
		
		String inputJson = super.mapToJson(activityRequest);
	      MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post(uri)
	         .contentType(MediaType.APPLICATION_JSON_VALUE)
	         .content(inputJson)).andReturn();
	      
	      int status = mvcResult.getResponse().getStatus();
	      assertEquals(200, status);
	      String content = mvcResult.getResponse().getContentAsString();
	      assertNotNull(content);
	}
	
	@Test
	public void userActivityTest() throws Exception{
		
		String uri = "/user/activity";
		UserActivityRequest userActivityRequest = new UserActivityRequest();
		userActivityRequest.userId = "1";
		userActivityRequest.tokenId = "token";
		userActivityRequest.searchOutput = "Some_url.com";
		userActivityRequest.searchParam = "Some Params";
		userActivityRequest.typeOfSearch = "Some Search";
		
		String inputJson = super.mapToJson(userActivityRequest);
	      MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post(uri)
	         .contentType(MediaType.APPLICATION_JSON_VALUE)
	         .content(inputJson)).andReturn();
	      
	      int status = mvcResult.getResponse().getStatus();
	      assertEquals(200, status);
	      String content = mvcResult.getResponse().getContentAsString();
	      assertNotNull(content);
	}
	
	@Test
	public void getProductsList() throws Exception {
		
		String uri = "/user/activity?userId=2";
	   MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri)
	      .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
	   
	   int status = mvcResult.getResponse().getStatus();
	   assertEquals(200, status);
	   String content = mvcResult.getResponse().getContentAsString();
	   assertNotNull(content);
	}
}
