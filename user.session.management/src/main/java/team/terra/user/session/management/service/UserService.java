package team.terra.user.session.management.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;
import team.terra.user.session.management.entity.UserActivityEntity;
import team.terra.user.session.management.entity.UserEntity;
import team.terra.user.session.management.entity.UserLogEntity;
import team.terra.user.session.management.entity.UserRegisterEntity;
import team.terra.user.session.management.model.request.UserActivityRequest;
import team.terra.user.session.management.model.request.UserLogRequest;
import team.terra.user.session.management.model.request.UserRegisterRequest;
import team.terra.user.session.management.model.request.UserRequestModel;
import team.terra.user.session.management.model.response.UserActivityResponse;
import team.terra.user.session.management.model.response.UserLogResponse;
import team.terra.user.session.management.model.response.UserRegisterResponse;
import team.terra.user.session.management.model.response.UserResponseModel;
import team.terra.user.session.management.repository.UserActivityRepository;
import team.terra.user.session.management.repository.UserLogRepository;
import team.terra.user.session.management.repository.UserRegisterRepository;
import team.terra.user.session.management.repository.UserRepository;

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
	@Autowired
	private UserRegisterRepository userRegisterRepository;
	
	private UserEntity userEntity = new UserEntity();
	private UserLogEntity userLogEntity = new UserLogEntity();
	private UserActivityEntity userActivityEntity = new UserActivityEntity();
	private UserRegisterEntity userRegisterEntity = new UserRegisterEntity();
	
	private UserResponseModel userResponseModel = new UserResponseModel();
	private UserLogResponse userLogResponse = new UserLogResponse();
	private UserActivityResponse userActivityResponse = new UserActivityResponse();
	private UserRegisterResponse userRegisterResponse = new UserRegisterResponse();
	
	private static int user_reg_id = 100000; // This is used if user registered without an SSO. SO if user_id more than this value, the user is locally registered.
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
			logger.info("Service : Data Management: userLogService : New user: "+userEntity.userId + userEntity.name + userEntity.email,userEntity.userId, userEntity.name, userEntity.email);
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
		logger.info("Service : Session Management: session_id: "+ UserService.session_id +" User Id: " + userLogRequest.userId + " Activity: "+ userLogRequest.activity);
		
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
		logger.info("Service : Activity post Management: activity_id: "+ UserService.activity_id +" User Id: " + userActivityRequest.userId + " Seach_type: "+ userActivityRequest.typeOfSearch);
		
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
		logger.info("Service : Activity Get Management: user_id = "+userId);
		
		return userActivityResponse;
	}

	public UserRegisterResponse postUserRegisterService(UserRegisterRequest userRegisterRequest) {
		
		String userExistId = userRegisterRepository.findUserIdByEmailId(userRegisterRequest.emailId);
		System.out.println(userExistId);
		userRegisterResponse =  new UserRegisterResponse();
		if(userExistId != null) {
			userRegisterResponse.userId = userExistId;
			userRegisterResponse.response = "User Exists with same emailId";
			
			logger.info("Service : POST User Register: Old Registered user : user_id = "+user_reg_id +" emailId: " + userRegisterRequest.emailId);
			return userRegisterResponse;
		}
		else {
			String hashPassword = hashPassword(userRegisterRequest.password);
			UserService.user_reg_id += 1;
			
			userRegisterEntity.userId = user_reg_id;
			userRegisterEntity.userName = userRegisterRequest.userName;
			userRegisterEntity.emailId = userRegisterRequest.emailId;
			userRegisterEntity.password = hashPassword;
			
			userRegisterRepository.save(userRegisterEntity);
			userRegisterResponse.userId = Integer.toString(UserService.user_reg_id);
			logger.info("Service : POST User Register: New Registered user :user_id = "+user_reg_id +" emailId: " + userRegisterRequest.emailId);
			
			return userRegisterResponse;
		}
	}

	public UserRegisterResponse postUserAuthenticationService(UserRegisterRequest userRegisterRequest) {
		
		String userExistId = userRegisterRepository.findUserIdByEmailId(userRegisterRequest.emailId);
		if(userExistId == null) {
			userRegisterResponse.userId = "-1";
			userRegisterResponse.response = "User emailId does not exists, please register.";
			logger.info("Service : POST User Authentication: Not exists : user_id = "+userExistId +" emailId: " + userRegisterRequest.emailId);
			return userRegisterResponse;
		}
		else {
			String hashPassword = userRegisterRepository.findPasswordByEmailId(userRegisterRequest.emailId);
			boolean authentication = checkPassword(userRegisterRequest.password, hashPassword);
			
			userRegisterResponse = new UserRegisterResponse();
			if(authentication) {
				userRegisterResponse.userId = userRegisterRepository.findUserIdByEmailId(userRegisterRequest.emailId);
				userRegisterResponse.response = "Correct password!";
				logger.info("Service : POST User Correct Authentication: user_id = "+userRegisterResponse.userId +" emailId: " + userRegisterRequest.emailId + "Password Auth: "+authentication);
				return userRegisterResponse;
			}
			userRegisterResponse.userId = "-1";
			userRegisterResponse.response = "Incorrect password!";
			logger.info("Service : POST User Correct Authentication: user_id = "+userRegisterResponse.userId +" emailId: " + userRegisterRequest.emailId + " Password Auth: "+authentication);
			return userRegisterResponse;
		}
	}
	
	private boolean checkPassword(String plainPassword, String hashedPassword) {
		if (BCrypt.checkpw(plainPassword, hashedPassword))
			return true;
		else
			return false;
	}
	
	private String hashPassword(String plainTextPassword){
		return BCrypt.hashpw(plainTextPassword, BCrypt.gensalt());
	}

}
