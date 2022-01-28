package com.example.demo.service;

import com.example.demo.model.ResponseEntity;
import com.example.demo.model.RequestEntity;

public class HelloService {
	ResponseEntity responseEntity = new ResponseEntity();
	RequestEntity requestEntity = new RequestEntity();
	
	public ResponseEntity testService(RequestEntity requestEntity) {
		responseEntity.setResponse(requestEntity.getRequest());
		return responseEntity;
	}
	
	public ResponseEntity testPostService (RequestEntity requestEntity) {
		responseEntity.setResponse(requestEntity.getRequest());
		return responseEntity;
	}

}
