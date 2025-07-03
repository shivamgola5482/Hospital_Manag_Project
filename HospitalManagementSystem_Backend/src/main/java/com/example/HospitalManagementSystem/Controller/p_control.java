package com.example.HospitalManagementSystem.Controller;

import com.example.HospitalManagementSystem.Entity.Patient;
import com.example.HospitalManagementSystem.Service.p_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = "http://localhost:3000/")
public class p_control {

    @Autowired
    private p_service service;
    @GetMapping
    public List<Patient> getAllPatient(){
        return service.getAllPatient();
    }

    @GetMapping("/{id}")
    public Patient getPatientById(@PathVariable Long id){
        return service.getPatientById(id);
    }

    @PostMapping
    public Patient savePatient(@RequestBody Patient patient){
        return service.savePatient(patient);
    }
    @DeleteMapping("/{id}")
    public void deletePatient(@PathVariable Long id){
        service.deletePatient(id);
    }
}
