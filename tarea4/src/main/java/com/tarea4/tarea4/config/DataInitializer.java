package com.tarea4.tarea4.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.tarea4.tarea4.models.Role;
import com.tarea4.tarea4.models.User;
import com.tarea4.tarea4.models.UserRepository;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${app.admin.username}")
    private String adminUsername;

    @Value("${app.admin.password}")
    private String adminPassword;

    @Value("${app.auditor.username}")
    private String auditorUsername;

    @Value("${app.auditor.password}")
    private String auditorPassword;

    public DataInitializer(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        createIfMissing(adminUsername, adminPassword, Role.ROLE_ADMIN);
        createIfMissing(auditorUsername, auditorPassword, Role.ROLE_AUDITOR);
    }

    private void createIfMissing(String username, String password, Role role) {
        if (userRepository.findByUsername(username) == null) {
            User user = new User(username, passwordEncoder.encode(password), role);
            userRepository.save(user);
        }
    }
}
