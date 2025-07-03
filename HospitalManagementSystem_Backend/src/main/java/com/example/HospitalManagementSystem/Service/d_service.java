package com.example.HospitalManagementSystem.Service;

import com.example.HospitalManagementSystem.Entity.Doctor;
import com.example.HospitalManagementSystem.Repository.d_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class d_service {
    @Autowired
    private d_repo repo;

    public List<Doctor> getAllDoctor(){
        return repo.findAll();
    }
    public Doctor getDoctorById(Long id){
        return repo.findById(id).orElse(null);
    }
    public Doctor saveDoctor(Doctor doctor){
        return repo.save(doctor);
    }
    public void deleteDoctor(Long id){
        repo.deleteById(id);
    }
}
