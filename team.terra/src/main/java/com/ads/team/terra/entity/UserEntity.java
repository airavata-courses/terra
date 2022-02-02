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
public class UserEntity {
	
	 @Id
	 //@GeneratedValue(strategy=GenerationType.AUTO) - Not working when the application runs in container.
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public Integer userId;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String name;

	 @Getter @Setter(AccessLevel.PROTECTED)
	 public String email;
	  
	//Login Data & time 

}
