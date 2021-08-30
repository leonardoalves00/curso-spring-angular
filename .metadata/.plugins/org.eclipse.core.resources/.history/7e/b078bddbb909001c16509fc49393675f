package com.leonardo.curso.rest;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.leonardo.curso.model.modelentity.Cliente;
import com.leonardo.curso.model.repository.ClienteRepository;



@RestController
@RequestMapping("/api/clientes")
@CrossOrigin("http://localhost:4200")
public class ClienteController {
	
	@Autowired
	private ClienteRepository repository;

	/*public ClienteController(ClienteRepository repository) {
		this.repository = repository;
	}*/
	
	@GetMapping
	public List<Cliente> obterTodos() {
		return repository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente salvar(@RequestBody @Valid Cliente cliente) {
		return repository.save(cliente);
	};
	
	@GetMapping("{id}")
	public Cliente acharPorId( @PathVariable Integer id){
		return repository
				.findById(id)
				.orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado."));
	};
	
	@DeleteMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deletar( @PathVariable Integer id ){
		//repository.deleteById(id);
		acharPorId(id);
		repository.deleteById(id);
		
		/*repository.findById(id)
			.map( cliente -> {
				repository.delete(cliente);
				System.out.println("deletado");
				return Void.TYPE;
				
			})
			.orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));*/
	}
	
	
	@PutMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void atualizar( @PathVariable Integer id, @RequestBody @Valid Cliente clienteAtualizado) {
	
		repository.findById(id)
			.map(cliente -> {
				clienteAtualizado.setId(cliente.getId());
				//cliente.setNome(clienteAtualizado.getNome());
				//cliente.setCpf(clienteAtualizado.getNome());
				return repository.save(clienteAtualizado);
			})
			.orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente nao encontrado."));
		
		
	}
}
