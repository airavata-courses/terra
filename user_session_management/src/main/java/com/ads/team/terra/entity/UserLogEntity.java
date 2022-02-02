package com.ads.team.terra.entity;

import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class UserLogEntity {
	
	 @Id
	 //@GeneratedValue(strategy=GenerationType.AUTO) - Not working when the application runs in container.
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public Integer sessionId;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public Integer userId;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String tokenID;

	 @Getter @Setter(AccessLevel.PROTECTED)
	 public String activity;
	 
	 @Getter @Setter(AccessLevel.PROTECTED)
	 public String timeStamp;

}
