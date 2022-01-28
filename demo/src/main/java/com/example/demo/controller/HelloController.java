package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;  

import com.example.demo.service.HelloService;
import com.example.demo.model.ResponseEntity;
import com.example.demo.model.RequestEntity;

@RestController  
public class HelloController   {
	HelloService helloService = new HelloService(); 
	
	@GetMapping("/hello")
	public ResponseEntity helloService(@RequestBody RequestEntity requestEntity)  {
		
		return helloService.testService(requestEntity);  
	}  
	
	@PostMapping("/postHello")
	public ResponseEntity postHello(@RequestBody RequestEntity requestEntity) {
		return helloService.testPostService(requestEntity);
	}
}  


