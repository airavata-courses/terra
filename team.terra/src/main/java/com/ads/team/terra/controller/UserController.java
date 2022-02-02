package com.ads.team.terra.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ads.team.terra.model.UserActivityRequest;
import com.ads.team.terra.model.UserActivityResponse;
import com.ads.team.terra.model.UserLogRequest;
import com.ads.team.terra.model.UserLogResponse;
import com.ads.team.terra.model.UserRequestModel;
import com.ads.team.terra.model.UserResponseModel;
import com.ads.team.terra.service.UserService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * @author Himanshu
 * @apiNote RESTful APIs controller for the Team-Terra users. 
 *
 */
@NoArgsConstructor
@AllArgsConstructor
@Log4j2
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	private static final Logger logger = LogManager.getLogger(UserController.class);
	
	/**
	 * @param userRequestModel
	 * @return userId (UserResponseModel)
	 * @description It stores the user data like name, email and returns a unique userId. 
	 * 				If user is already registered, return the old user id.
	 */
	@PostMapping("/data")
	public UserResponseModel userData(@RequestBody UserRequestModel userRequestModel) {
		logger.info("controller : user/data");
		return userService.userLogService(userRequestModel); 
	}
	
	/**
	 * @param userLogRequest
	 * @return sessionId (UserLogResponse)
	 * @description It sores the user log activity(login, logout) and time.
	 */
	@PostMapping("/log")
	public UserLogResponse userLog(@RequestBody UserLogRequest userLogRequest ) {
		logger.info("controller : user/log");
		return userService.userLogService(userLogRequest);
	}
	
	/**
	 * @param userActivityRequest
	 * @return userActivityId (UserActivityResponse)
	 * @description It stores the user activities like the search params, search tokens, and also the url we get from python service.
	 */
	@PostMapping("/activity")
	public UserActivityResponse postUserActivity(@RequestBody UserActivityRequest userActivityRequest) {
		logger.info("controller : user/activity [POST]");
		return userService.postUserActivityService(userActivityRequest);
	}
	
	/**
	 * @param userActivityRequest
	 * @return List of search tokens, List of search types, List of UrRLs.
	 * @description List of user searches which includes search tokens, search type, and outputs from python services.
	 */
	@GetMapping("/activity")
	public UserActivityResponse getUserActivity(@RequestParam String userId) {
		logger.info("controller : user/activity [GET]");
		return userService.getUserActivityService(userId);
	}

}
