package com.example.HospitalManagementSystem.Repository;

import com.example.HospitalManagementSystem.Entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface a_repo extends JpaRepository<Appointment, Long> {
}
