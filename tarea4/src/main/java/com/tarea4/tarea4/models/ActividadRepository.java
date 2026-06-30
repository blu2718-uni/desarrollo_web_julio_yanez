package com.tarea4.tarea4.models;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ActividadRepository extends JpaRepository<Actividad, Integer> {

    @Query("SELECT a FROM Actividad a " +
           "JOIN FETCH a.miembro m " +
           "JOIN FETCH m.comuna c " +
           "WHERE LOWER(a.nombre) LIKE LOWER(CONCAT('%', :q, '%')) " +
           "   OR LOWER(COALESCE(a.descripcion, '')) LIKE LOWER(CONCAT('%', :q, '%')) " +
           "   OR LOWER(c.nombre) LIKE LOWER(CONCAT('%', :q, '%'))")
    List<Actividad> buscarPorTexto(@Param("q") String q);
}