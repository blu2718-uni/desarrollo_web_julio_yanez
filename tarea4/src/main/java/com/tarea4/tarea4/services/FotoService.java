package com.tarea4.tarea4.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tarea4.tarea4.models.Foto;
import com.tarea4.tarea4.models.FotoRepository;
import com.tarea4.tarea4.models.Log;
import com.tarea4.tarea4.models.LogRepository;

@Service
public class FotoService {

    private final FotoRepository fotoRepository;
    private final LogRepository logRepository;

    public FotoService(FotoRepository fotoRepository, LogRepository logRepository) {
        this.fotoRepository = fotoRepository;
        this.logRepository = logRepository;
    }

    public List<Foto> listarTodas() {
        return fotoRepository.findAllOrderedByMiembroFechaRegistro();
    }

    @Transactional
    public void eliminarFoto(Integer fotoId, String motivo) {
        Foto foto = fotoRepository.findById(fotoId)
                .orElseThrow(() -> new IllegalArgumentException("Foto no encontrada: " + fotoId));

        foto.setEliminada(true);
        fotoRepository.save(foto);

        String mensaje = "eliminado foto " + fotoId + " por usuario admin, motivo: " + motivo;
        logRepository.save(new Log(mensaje));
    }
}
