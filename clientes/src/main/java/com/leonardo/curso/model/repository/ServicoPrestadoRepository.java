package com.leonardo.curso.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.leonardo.curso.model.modelentity.ServicoPrestado;

public interface ServicoPrestadoRepository extends JpaRepository<ServicoPrestado, Integer>{
	
	@Query("select s from ServicoPrestado s Join s.cliente c" + 
			" where upper(c.nome) like upper( :nome) and MONTH(s.data) =:mes ")
	List<ServicoPrestado> findByNomeClienteAndMes(
			@Param("nome") String nome,
			@Param("mes") Integer mes);
	
}
