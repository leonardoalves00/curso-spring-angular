package com.leonardo.curso.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.leonardo.curso.model.modelentity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
