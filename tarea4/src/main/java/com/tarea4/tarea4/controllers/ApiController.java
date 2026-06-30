package com.tarea4.tarea4.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tarea4.tarea4.services.BuscadorService;

import jakarta.persistence.EntityNotFoundException;

@RestController
public class ApiController {

    private final BuscadorService buscadorService;

    public ApiController(BuscadorService buscadorService) {
        this.buscadorService = buscadorService;
    }

    @GetMapping("/api/actividades")
    public List<Map<String, Object>> buscar(@RequestParam("q") String q) {
        if (q == null || q.trim().length() < 3) {
            return List.of();
        }
        return buscadorService.buscar(q.trim());
    }

    @PostMapping("/api/notas")
    public ResponseEntity<Map<String, Object>> evaluar(@RequestBody EvaluarRequest req) {
        try {
            Map<String, Object> resultado = buscadorService.evaluar(req.actividadId(), req.nota());
            return ResponseEntity.ok(resultado);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
}