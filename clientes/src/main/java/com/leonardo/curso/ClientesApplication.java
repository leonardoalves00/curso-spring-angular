package com.leonardo.curso;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ClientesApplication {
	
	/*@Bean
	public CommandLineRunner run( @Autowired ClienteRepository repository ){
		return args ->{
			Cliente cliente = Cliente.builder().cpf("12345678910").nome("leonardo").build();
			repository.save(cliente);
		};
	}*/
	
	public static void main(String[] args) {
		SpringApplication.run(ClientesApplication.class, args);
	}

}
