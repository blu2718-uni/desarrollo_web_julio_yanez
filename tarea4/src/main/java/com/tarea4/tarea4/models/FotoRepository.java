package com.tarea4.tarea4.models;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FotoRepository extends JpaRepository<Foto, Integer> {

    @Query("SELECT f FROM Foto f " +
           "JOIN FETCH f.actividad a " +
           "JOIN FETCH a.miembro m " +
           "JOIN FETCH m.comuna " +
           "ORDER BY m.fechaRegistro DESC")
    List<Foto> findAllOrderedByMiembroFechaRegistro();

    long countByEliminada(Boolean eliminada);
}
