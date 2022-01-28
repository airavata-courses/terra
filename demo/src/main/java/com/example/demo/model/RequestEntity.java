package com.example.demo.model;

public class RequestEntity {

	@Override
	public String toString() {
		return "RequestEntity [request=" + request + ", getRequest()=" + getRequest() + "]";
	}

	public String request;

	public String getRequest() {
		return request;
	}

	public void setRequest(String request) {
		this.request = request;
	}
	
}
