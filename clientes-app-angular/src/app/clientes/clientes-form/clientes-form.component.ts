import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  sucess: boolean = false;
  errors: string[];

  constructor(
    private router: Router,
    private service: ClientesService
  ) {}

  ngOnInit(): void {
    //this.cliente = this.service.getCliente();
    this.cliente = new Cliente;
  }

  onSubmit(){
    this.service.salvar(this.cliente)
      .subscribe(resposta => {
        this.sucess = true;
        this.errors = null;
        this.cliente = resposta
        console.log(resposta)
      }, errorResponse => {
        this.errors = errorResponse.error.errors;
        this.sucess = false;
      })
  }

  voltarLista(){
    this.router.navigate(['/clientes-lista'])
  }

}
