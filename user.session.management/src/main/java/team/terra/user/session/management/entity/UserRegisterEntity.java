package team.terra.user.session.management.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class UserRegisterEntity {
	
	@Id
	 //@GeneratedValue(strategy=GenerationType.AUTO) - Not working when the application runs in container.
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public Integer userId;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String userName;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String emailId;
	 
	 @Getter @Setter(AccessLevel.PACKAGE)
	 public String password;

}
