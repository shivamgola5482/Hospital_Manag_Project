package com.example.HospitalManagementSystem.Service;

import com.example.HospitalManagementSystem.Entity.Appointment;
import com.example.HospitalManagementSystem.Repository.a_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class a_service {

    @Autowired
    private a_repo repo;

    public List<Appointment> getAllAppointment(){
        return repo.findAll();
    }
    public Appointment getAppointmentById(Long id){
        return repo.findById(id).orElse(null);
    }
    public Appointment saveAppointment(Appointment appointment){
        return repo.save(appointment);
    }
    public void deleteAppointment(Long id){
        repo.deleteById(id);
    }
}
