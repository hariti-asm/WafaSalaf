package org.example.wafasalaf.entities;

import jakarta.persistence.*;
import org.example.wafasalaf.enums.StatusChange;

import java.util.ArrayList;
import java.util.List;

@Entity
public class CreditRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private  Long id;
   private String name;
   private String phone;
   private String email;
   private String status ;
    private double amount;
    private int duration;
    private String remarks;
    @ElementCollection
    private List<StatusChange> statusHistory ;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public String getStatus() {
        return status;
    }

    public double getAmount() {
        return amount;
    }

    public int getDuration() {
        return duration;
    }

    public String getRemarks() {
        return remarks;
    }

    public List<StatusChange> getStatusHistory() {
        return statusHistory;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setStatus(String status) {
        status = status;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public void setStatusHistory(List<StatusChange> statusHistory) {
        this.statusHistory = statusHistory;
    }

    @Override
    public String toString() {
        return "CreditRequest{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", Status='" + status + '\'' +
                ", amount=" + amount +
                ", duration=" + duration +
                ", remarks='" + remarks + '\'' +
                ", statusHistory=" + statusHistory +
                '}';
    }
}
