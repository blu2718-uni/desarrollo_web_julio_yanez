package com.tarea4.tarea4.models;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name = "log")
public class Log {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private LocalDateTime fecha;

    @Column(nullable = false, length = 300)
    private String mensaje;

    public Log() {
    }

    public Log(String mensaje) {
        this.mensaje = mensaje;
    }

    @PrePersist
    public void prePersist() {
        if (this.fecha == null) {
            this.fecha = LocalDateTime.now();
        }
    }

    public Integer getId() {
        return id;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public String getMensaje() {
        return mensaje;
    }
}
