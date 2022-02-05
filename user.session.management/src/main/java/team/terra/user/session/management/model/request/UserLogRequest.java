package team.terra.user.session.management.model.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserLogRequest {
	
	public String userId;
	
	public String tokenID;
	
	public String activity; //activity = login or logout

}
