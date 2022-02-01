package com.ads.team.terra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ads.team.terra.entity.UserLogEntity;

@Repository
public interface UserLogRepository extends JpaRepository<UserLogEntity, Integer> {

}
