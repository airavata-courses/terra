package com.ads.team.terra.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserActivityResponse {
	
	public String userActivityId;
	
	public String userId;
	
	public List<String> typeOfSearch;
	 
	public List<String> searchParam;
	
	public List<String> searchOutput;

}
