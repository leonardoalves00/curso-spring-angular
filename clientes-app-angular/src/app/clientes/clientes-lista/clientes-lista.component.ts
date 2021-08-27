import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.scss']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(
    private router: Router,
    private service: ClientesService,
  ) { }

  ngOnInit(): void {
    this.service.getCliente()
      .subscribe(resposta => this.clientes = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/clientes-form'])
  }

}
