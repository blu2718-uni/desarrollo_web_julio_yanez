package com.tarea4.tarea4.models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "actividad")
public class Actividad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "miembro_id")
    private Miembro miembro;

    @Column(nullable = false, length = 15)
    private String dia;

    @Column(name = "hora_inicio", nullable = false, length = 5)
    private String horaInicio;

    @Column(nullable = false, length = 5)
    private String duracion;

    @Column(nullable = false, length = 15)
    private String tipo;

    @Column(nullable = false, length = 45)
    private String nombre;

    @Column(columnDefinition = "TEXT", nullable = true)
    private String descripcion;

    @Column(length = 300, nullable = true)
    private String link;

    @OneToMany(mappedBy = "actividad", fetch = FetchType.LAZY)
    private List<Nota> notas;

    @OneToMany(mappedBy = "actividad", fetch = FetchType.LAZY)
    private List<Foto> fotos;

    public Actividad() {
    }

    public Integer getId() {
        return id;
    }

    public Miembro getMiembro() {
        return miembro;
    }

    public String getDia() {
        return dia;
    }

    public String getHoraInicio() {
        return horaInicio;
    }

    public String getDuracion() {
        return duracion;
    }

    public String getTipo() {
        return tipo;
    }

    public String getNombre() {
        return nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public String getLink() {
        return link;
    }

    public List<Nota> getNotas() {
        return notas;
    }

    public List<Foto> getFotos() {
        return fotos;
    }
}