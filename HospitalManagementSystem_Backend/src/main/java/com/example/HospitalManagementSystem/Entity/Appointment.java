package com.example.HospitalManagementSystem.Entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "a_table")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate date;
    private LocalTime time;
    private String reason;

    @ManyToOne
    @JoinColumn(name = "patient_id")//Foreign key patient table
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "doctor_id")//Foreign key doctor table
    private Doctor doctor;

    public Appointment(Long id, LocalDate date, LocalTime time, String reason, Patient patient, Doctor doctor) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.reason = reason;
        this.patient = patient;
        this.doctor = doctor;
    }

    public Appointment(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }
}
