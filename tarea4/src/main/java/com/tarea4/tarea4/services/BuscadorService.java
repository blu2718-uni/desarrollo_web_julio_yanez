package com.tarea4.tarea4.services;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.tarea4.tarea4.models.Actividad;
import com.tarea4.tarea4.models.ActividadRepository;
import com.tarea4.tarea4.models.Nota;
import com.tarea4.tarea4.models.NotaRepository;

@Service
public class BuscadorService {

    private final ActividadRepository actividadRepository;
    private final NotaRepository notaRepository;

    public BuscadorService(ActividadRepository actividadRepository, NotaRepository notaRepository) {
        this.actividadRepository = actividadRepository;
        this.notaRepository = notaRepository;
    }

    public List<Map<String, Object>> buscar(String q) {
        List<Actividad> actividades = actividadRepository.buscarPorTexto(q);
        List<Map<String, Object>> resultado = new ArrayList<>();

        for (Actividad a : actividades) {
            Map<String, Object> item = new LinkedHashMap<>();
            item.put("id", a.getId());
            item.put("miembroNombre", a.getMiembro().getNombre());
            item.put("dia", a.getDia());
            item.put("tipo", a.getTipo());
            item.put("comunaNombre", a.getMiembro().getComuna().getNombre());
            item.put("nombre", a.getNombre());
            item.put("descripcion", a.getDescripcion());
            item.put("nota", calcularNota(a.getId()));
            resultado.add(item);
        }
        return resultado;
    }

    public Map<String, Object> evaluar(Integer actividadId, Integer nota) {
        if (nota == null) {
            throw new IllegalArgumentException("La nota es obligatoria");
        }
        if (nota < 1 || nota > 7) {
            throw new IllegalArgumentException("La nota debe ser un entero entre 1 y 7");
        }

        Actividad actividad = actividadRepository.getReferenceById(actividadId);
        notaRepository.save(new Nota(actividad, nota));

        long cantidad = notaRepository.cantidadPorActividad(actividadId);
        Map<String, Object> respuesta = new LinkedHashMap<>();
        respuesta.put("nota", calcularNota(actividadId));
        respuesta.put("cantidad", cantidad);
        return respuesta;
    }

    private String calcularNota(Integer actividadId) {
        long cantidad = notaRepository.cantidadPorActividad(actividadId);
        if (cantidad == 0) {
            return "-";
        }
        Double promedio = notaRepository.promedioPorActividad(actividadId);
        return String.format(Locale.US, "%.1f", promedio);
    }
}