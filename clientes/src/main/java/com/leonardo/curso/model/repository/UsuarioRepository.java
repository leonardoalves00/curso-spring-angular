package com.leonardo.curso.model.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.leonardo.curso.model.modelentity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

	Optional<Usuario> findByUsername(String username);

	boolean existsByUsername(String username);
}
