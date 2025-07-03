package com.example.HospitalManagementSystem.Repository;

import com.example.HospitalManagementSystem.Entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface d_repo extends JpaRepository<Doctor, Long> {
}
