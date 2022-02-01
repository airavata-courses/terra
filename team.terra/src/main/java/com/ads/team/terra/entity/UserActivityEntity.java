package com.ads.team.terra.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class UserActivityEntity {
	
	@Id
	 //@GeneratedValue(strategy=GenerationType.AUTO) - Not working when the application runs in container.
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public Integer userActivityId;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public Integer userId;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String tokenId;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String typeOfSearch;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String searchParam;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String searchOutput;

}
