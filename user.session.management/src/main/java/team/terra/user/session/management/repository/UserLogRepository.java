package team.terra.user.session.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import team.terra.user.session.management.entity.UserLogEntity;

@Repository
public interface UserLogRepository extends JpaRepository<UserLogEntity, Integer> {

}
