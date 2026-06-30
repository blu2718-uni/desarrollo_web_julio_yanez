package com.tarea4.tarea4.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.tarea4.tarea4.services.BuscadorService;

@Controller
public class AppController {

    private final BuscadorService buscadorService;

    public AppController(BuscadorService buscadorService) {
        this.buscadorService = buscadorService;
    }

    @GetMapping("/")
    public String index() {
        return "buscar";
    }
}