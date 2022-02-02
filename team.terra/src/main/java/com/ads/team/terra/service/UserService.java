package com.ads.team.terra.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ads.team.terra.entity.UserActivityEntity;
import com.ads.team.terra.entity.UserEntity;
import com.ads.team.terra.entity.UserLogEntity;
import com.ads.team.terra.model.UserActivityRequest;
import com.ads.team.terra.model.UserActivityResponse;
import com.ads.team.terra.model.UserLogRequest;
import com.ads.team.terra.model.UserLogResponse;
import com.ads.team.terra.model.UserRequestModel;
import com.ads.team.terra.model.UserResponseModel;
import com.ads.team.terra.repository.UserActivityRepository;
import com.ads.team.terra.repository.UserLogRepository;
import com.ads.team.terra.repository.UserRepository;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

@NoArgsConstructor
@AllArgsConstructor
@Log4j2
@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private UserLogRepository userLogRepository;
	@Autowired
	private UserActivityRepository userActivityRepository;
	
	private UserEntity userEntity = new UserEntity();
	private UserLogEntity userLogEntity = new UserLogEntity();
	private UserActivityEntity userActivityEntity = new UserActivityEntity();
	
	private UserResponseModel userResponseModel = new UserResponseModel();
	private UserLogResponse userLogResponse = new UserLogResponse();
	private UserActivityResponse userActivityResponse = new UserActivityResponse();
	
	private static int user_id = 1;
	private static int session_id = 1;
	private static int activity_id =1;
	
	private static final Logger logger = LogManager.getLogger(UserService.class);

	public UserResponseModel userLogService(UserRequestModel userRequestModel) {
		
		String user_id_db = userRepository.findUserByNameAndEmail(userRequestModel.name, userRequestModel.email);
		
		if(user_id_db != null) {
			userResponseModel.userId = user_id_db;
			logger.info("Data Management: userLogService : Old user: "+userResponseModel.userId,userResponseModel.userId, userRequestModel.name, userRequestModel.email);
			return userResponseModel;
		}
		else {
			UserService.user_id += 1;
			userEntity.userId = UserService.user_id;
			userEntity.name = userRequestModel.name;
			userEntity.email = userRequestModel.email;
			userRepository.save(userEntity);
			userResponseModel.userId = Integer.toString(UserService.user_id);
			logger.info("Data Management: userLogService : New user: "+userEntity.userId + userEntity.name + userEntity.email,userEntity.userId, userEntity.name, userEntity.email);
			return userResponseModel;
		}
	}

	public UserLogResponse userLogService(UserLogRequest userLogRequest) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date date = new Date();
		String frmtdDate = dateFormat.format(date);
		
		UserService.session_id += 1;
		userLogEntity.sessionId = UserService.session_id;
		userLogEntity.userId = Integer.parseInt(userLogRequest.userId);
		userLogEntity.tokenID = userLogRequest.tokenID;
		userLogEntity.activity = userLogRequest.activity;
		userLogEntity.timeStamp = frmtdDate;
		
		userLogRepository.save(userLogEntity);
		userLogResponse.sessionId = Integer.toString(UserService.session_id);
		logger.info("Session Management: session_id: "+ UserService.session_id +" User Id: " + userLogRequest.userId + " Activity: "+ userLogRequest.activity);
		
		return userLogResponse;
	}

	public UserActivityResponse postUserActivityService(UserActivityRequest userActivityRequest) {
		
		UserService.activity_id += 1;
		userActivityEntity.userActivityId = UserService.activity_id;
		userActivityEntity.userId = Integer.parseInt(userActivityRequest.userId);
		userActivityEntity.tokenId = userActivityRequest.tokenId;
		userActivityEntity.typeOfSearch = userActivityRequest.typeOfSearch;
		userActivityEntity.searchParam = userActivityRequest.searchParam;
		userActivityEntity.searchOutput = userActivityRequest.searchOutput;
		
		userActivityRepository.save(userActivityEntity);
		userActivityResponse = new UserActivityResponse();
		userActivityResponse.userActivityId = Integer.toString(UserService.activity_id);
		logger.info("Activity post Management: activity_id: "+ UserService.activity_id +" User Id: " + userActivityRequest.userId + " Seach_type: "+ userActivityRequest.typeOfSearch);
		
		return userActivityResponse;
	}

	public UserActivityResponse getUserActivityService(String userId) {
		
		List<String> findSearchOutputByUserId = userActivityRepository.findSearchOutputByUserId(Integer.parseInt(userId));
		List<String> findSearchParamByUserId = userActivityRepository.findSearchParamByUserId(Integer.parseInt(userId));
		List<String> findTypeOfSearchByUserId = userActivityRepository.findTypeOfSearchByUserId(Integer.parseInt(userId));
		
		userActivityResponse = new UserActivityResponse();
		userActivityResponse.userId = userId;
		userActivityResponse.searchOutput = findSearchOutputByUserId;
		userActivityResponse.searchParam = findSearchParamByUserId;
		userActivityResponse.typeOfSearch = findTypeOfSearchByUserId;
		userActivityResponse.userActivityId = null;
		
		return userActivityResponse;
	}

}
