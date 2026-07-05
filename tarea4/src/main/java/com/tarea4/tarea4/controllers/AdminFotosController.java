package com.tarea4.tarea4.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.tarea4.tarea4.services.FotoService;

@Controller
@RequestMapping("/admin-fotos")
@PreAuthorize("hasRole('ADMIN')")
public class AdminFotosController {

    private final FotoService fotoService;

    public AdminFotosController(FotoService fotoService) {
        this.fotoService = fotoService;
    }

    @GetMapping("/")
    public String listar(Model model) {
        model.addAttribute("fotos", fotoService.listarTodas());
        return "admin-fotos";
    }

    @PostMapping("/{id}/eliminar")
    public String eliminar(@PathVariable Integer id,
                           @RequestParam("motivo") String motivo,
                           RedirectAttributes redirectAttributes) {
        if (motivo == null || motivo.trim().length() < 5 || motivo.length() > 200) {
            redirectAttributes.addFlashAttribute("error", "El motivo debe tener entre 5 y 200 caracteres.");
            return "redirect:/admin-fotos/";
        }
        try {
            fotoService.eliminarFoto(id, motivo);
            redirectAttributes.addFlashAttribute("success", "Foto eliminada correctamente.");
        } catch (IllegalArgumentException e) {
            redirectAttributes.addFlashAttribute("error", e.getMessage());
        }
        return "redirect:/admin-fotos/";
    }
}
