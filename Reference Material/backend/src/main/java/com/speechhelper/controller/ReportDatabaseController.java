package com.speechhelper.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.speechhelper.databasemanager.ReportEntity;
import com.speechhelper.databasemanager.ReportRepository;
import com.speechhelper.databasemanager.SpeechEntity;


@CrossOrigin(origins = "https://speechhelper.herokuapp.com/")
@RestController
public class ReportDatabaseController {
	@Autowired
	private ReportRepository reportRepository;
	
	@PostMapping(path="/add_report") // Map ONLY POST Requests
	public String addNewReport (@RequestParam Long speechId, @RequestParam Long userId) {
		ReportEntity n = new ReportEntity();
		n.setSpeechId(speechId);
		n.setUserId(userId);
		reportRepository.save(n);
		return "Saved";
	}
	
	@GetMapping(path="/all/report")
	public Iterable<ReportEntity> getAllReports() {
	    // This returns a JSON or XML with the users
	    return reportRepository.findAll();
	}
	
	@GetMapping(path="/report_id/{:reportId}")
	public ReportEntity findByReportId(@Param("reportId") Long reportId) {
		return reportRepository.findById(reportId).get();
	}
	
	@GetMapping(path = "/report_speech_id/{:speechId}")
	public ReportEntity findBySpeechId(@Param("speechId") Long speechId){
		return reportRepository.findBySpeechId(speechId);
	}
}
