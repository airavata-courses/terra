package team.terra.user.session.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import team.terra.user.session.management.entity.UserEntity;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


/**
 * @author Himanshu
 *
 */
@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
	
	@Query("SELECT id FROM UserEntity u WHERE u.name = :name and u.email = :email")
	String findUserByNameAndEmail(@Param("name") String name, @Param("email") String email);

}
