package com.example.HospitalManagementSystem.Controller;

import com.example.HospitalManagementSystem.Entity.Doctor;
import com.example.HospitalManagementSystem.Service.d_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "http://localhost:3000/")
public class d_control {
    @Autowired
    private d_service service;

    @GetMapping
    public List<Doctor> getAllDoctor(){
        return service.getAllDoctor();
    }
    @GetMapping("/{id}")
    public Doctor getDoctorById(@PathVariable Long id){
        return service.getDoctorById(id);
    }
    @PostMapping
    public Doctor addDoctor(@RequestBody Doctor doctor){
        return service.saveDoctor(doctor);
    }
    @DeleteMapping("/{id}")
    public void deleteDoctor(@PathVariable Long id){
        service.deleteDoctor(id);
    }
}
