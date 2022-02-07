package team.terra.user.session.management.model.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserRegisterRequest {
	
	public String userName;
	
	public String emailId;
	
	public String password;
	

}
