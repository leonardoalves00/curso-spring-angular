package com.leonardo.curso.rest;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.leonardo.curso.model.modelentity.Usuario;
import com.leonardo.curso.model.repository.UsuarioRepository;
import com.leonardo.curso.rest.exception.UsuarioCadastradoException;
import com.leonardo.curso.service.UsuarioService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
public class UsuarioController {

	private final UsuarioService service;
	
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public void salvar( @RequestBody @Valid Usuario usuario) {
		try {
			service.salvar(usuario);
		} catch (UsuarioCadastradoException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
		
		
	}
	
}
