package team.terra.user.session.management.model.request;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserActivityRequest implements Serializable {

	@Override
	public String toString() {
		return "{\"userId\":\"" + userId + "\", \"tokenId\":\"" + tokenId + "\", \"typeOfSearch\":\"" + typeOfSearch
				+ "\", \"searchParam\":\"" + searchParam + "\", \"searchOutput\":\"" + searchOutput + "\"}";
	}

	public String userId;

	public String tokenId;

	public String typeOfSearch;

	public String searchParam;

	public String searchOutput;

}
