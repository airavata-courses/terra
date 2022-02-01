package com.ads.team.terra.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserActivityRequest {
	
	 public String userId;
	 
	 public String tokenId;
	 
	 public String typeOfSearch;
	 
	 public String searchParam;
	 
	 public String searchOutput;

}
