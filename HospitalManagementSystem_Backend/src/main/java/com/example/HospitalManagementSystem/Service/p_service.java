package com.example.HospitalManagementSystem.Service;

import com.example.HospitalManagementSystem.Entity.Patient;
import com.example.HospitalManagementSystem.Repository.p_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class p_service {

    @Autowired
    private p_repo repo;

    public List<Patient> getAllPatient(){
        return repo.findAll();
    }

    public Patient getPatientById(Long id){
        return repo.findById(id).orElse(null);
    }

    public Patient savePatient(Patient patient){
        return repo.save(patient);
    }
    public void deletePatient(Long id){
        repo.deleteById(id);
    }
}
