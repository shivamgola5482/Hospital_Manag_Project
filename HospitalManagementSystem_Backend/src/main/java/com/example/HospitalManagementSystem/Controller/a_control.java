package com.example.HospitalManagementSystem.Controller;

import com.example.HospitalManagementSystem.Entity.Appointment;
import com.example.HospitalManagementSystem.Service.a_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:3000/")
public class a_control {

    @Autowired
    private a_service service;

    @GetMapping
    public List<Appointment> getAllAppointment(){
        return service.getAllAppointment();
    }
    @GetMapping("/{id}")
    public Appointment getAppointmentById(@PathVariable Long id){
        return service.getAppointmentById(id);
    }
    @PostMapping
    public Appointment saveAppointment(@RequestBody Appointment appointment){
        return service.saveAppointment(appointment);
    }
    @DeleteMapping("/{id}")
    public void deleteAppointment(@PathVariable Long id){
        service.deleteAppointment(id);
    }
}
