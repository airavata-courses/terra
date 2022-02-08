package team.terra.user.session.management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import team.terra.user.session.management.entity.UserActivityEntity;

@Repository
public interface UserActivityRepository extends JpaRepository<UserActivityEntity, Integer>  {
	
	@Query("SELECT u.typeOfSearch FROM UserActivityEntity u WHERE u.userId = :userId")
	List<String> findTypeOfSearchByUserId(@Param("userId") int userId);
	
	@Query("SELECT u.searchParam FROM UserActivityEntity u WHERE u.userId = :userId")
	List<String> findSearchParamByUserId(@Param("userId") int userId);
	
	@Query("SELECT u.searchOutput FROM UserActivityEntity u WHERE u.userId = :userId")
	List<String> findSearchOutputByUserId(@Param("userId") int userId);

}
