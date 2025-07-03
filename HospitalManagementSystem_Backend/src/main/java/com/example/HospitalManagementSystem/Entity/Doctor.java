package com.example.HospitalManagementSystem.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "d_table")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String speciality;
    private String phone;
    private String email;

    public Doctor(Long id, String name, String speciality, String phone, String email) {
        this.id = id;
        this.name = name;
        this.speciality = speciality;
        this.phone = phone;
        this.email = email;
    }

    public Doctor(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

