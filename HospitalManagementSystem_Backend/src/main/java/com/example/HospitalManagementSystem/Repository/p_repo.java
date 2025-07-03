package com.example.HospitalManagementSystem.Repository;

import com.example.HospitalManagementSystem.Entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface p_repo extends JpaRepository<Patient, Long> {

}
