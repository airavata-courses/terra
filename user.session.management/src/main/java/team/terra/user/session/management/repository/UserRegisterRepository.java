package team.terra.user.session.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import team.terra.user.session.management.entity.UserRegisterEntity;

@Repository
public interface UserRegisterRepository extends JpaRepository<UserRegisterEntity, Integer>  {
	
	@Query("SELECT u.password FROM UserRegisterEntity u WHERE u.emailId = :emailId")
	String findPasswordByEmailId(@Param("emailId") String emailId);
	
	@Query("SELECT id FROM UserRegisterEntity u WHERE u.emailId = :emailId")
	String findUserIdByEmailId(@Param("emailId") String emailId);

}
