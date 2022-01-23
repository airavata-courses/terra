package com.speechhelper.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.speechhelper.databasemanager.SpeechEntity;
import com.speechhelper.databasemanager.SpeechRepository;
import com.speechhelper.speechtotext.Speech;


@CrossOrigin(origins = "https://speechhelper.herokuapp.com/")
@RestController
public class SpeechDatabaseController {
	@Autowired
	private SpeechRepository speechRepository;
	
	@CrossOrigin
	@PostMapping(path="/add_speech") // Map ONLY POST Requests
	public String addNewSpeech (@RequestParam Long userId, @RequestParam Speech speech) {
		SpeechEntity n = new SpeechEntity();
		n.setUserId(userId);
		//n.setTranscribedSpeechText(speech.getText());
		//n.setConvertedSpeechText(speech.getInput());
		speechRepository.save(n);
		return "Saved";
	}
	
	@CrossOrigin
	@GetMapping(path="/all/speech")
	public Iterable<SpeechEntity> getAllSpeech() {
	    // This returns a JSON or XML with the users
	    return speechRepository.findAll();
	}
	
	@CrossOrigin
	@GetMapping(path = "/speech_user_id/{:userId}")
	public Iterable<SpeechEntity> findByUserId(@Param("userId") Long userId){
		return speechRepository.findByUserId(userId);
	}
	
	@CrossOrigin
	@GetMapping(path = "/speech_id/{:speechId}")
	public SpeechEntity findBySpeechId(@Param("speechId") Long speechId){
		return speechRepository.findBySpeechId(speechId);
	}
	
	
}
