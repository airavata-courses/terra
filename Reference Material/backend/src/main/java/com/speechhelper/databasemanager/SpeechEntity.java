package com.speechhelper.databasemanager;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@IdClass(SpeechID.class)
@Table(name="Speech")
public class SpeechEntity implements Serializable{
	private static final long serialVersionUID = 1L;

	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  @Column(name="speechId")
	  private Long speechId;
	  
	  @Id
	  @Column(name="userId")
	  private Long userId;

	  public SpeechEntity() {}


	 /* @Override
	  public String toString() {
	    return String.format(
	       // "Speech[speechId=%d, userId='%d', transcribedSpeechText='%s', convertedSpeechText='%s']",
	       // speechId, userId, transcribedSpeechText, convertedSpeechText );
	  }*/
	  
	  public Long getSpeechId() {
		    return speechId;
		  }
		  
	  public void setSpeechId(Long speechId) {
		  	this.speechId = speechId;
	  }
	  
	  public Long getUserId() {
		    return userId;
		  }
		  
	  public void setUserId(Long userId) {
		  	this.userId = userId;
	  }
	  
}
