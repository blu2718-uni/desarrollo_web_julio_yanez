package com.tarea4.tarea4.models;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NotaRepository extends JpaRepository<Nota, Integer> {

    @Query("SELECT COALESCE(AVG(n.valor), 0) FROM Nota n WHERE n.actividad.id = :actividadId")
    Double promedioPorActividad(@Param("actividadId") Integer actividadId);

    @Query("SELECT COUNT(n) FROM Nota n WHERE n.actividad.id = :actividadId")
    long cantidadPorActividad(@Param("actividadId") Integer actividadId);
}