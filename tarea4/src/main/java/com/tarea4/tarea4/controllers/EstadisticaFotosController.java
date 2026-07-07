package com.tarea4.tarea4.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class EstadisticaFotosController {

    @GetMapping("/estadistica-fotos")
    public String estadistica(Model model) {
        return "estadistica-fotos";
    }
}
