package com.tarea4.tarea4.controllers;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tarea4.tarea4.models.Log;
import com.tarea4.tarea4.models.LogRepository;

@Controller
@RequestMapping("/mensajes-log")
@PreAuthorize("hasAnyRole('ADMIN', 'AUDITOR')")
public class MensajesLogController {

    private final LogRepository logRepository;

    public MensajesLogController(LogRepository logRepository) {
        this.logRepository = logRepository;
    }

    @GetMapping("/")
    public String listar(Model model, Authentication auth) {
        List<Log> logs = logRepository.findAllByOrderByFechaDesc();
        model.addAttribute("auth", auth);
        model.addAttribute("logs", logs);
        return "mensajes-log";
    }
}
