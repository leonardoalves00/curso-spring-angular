import { ServicoPrestadoService } from './../../servico-prestado.service';
import { ServicoPrestado } from './../servico-prestado';
import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.scss']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicoPrestado;
  sucess: boolean = false;
  errors: String[];

  constructor(
    private serviceCliente: ClientesService,
    private servicePrestado: ServicoPrestadoService
  ) {
    this.servico = new ServicoPrestado;

   }

  ngOnInit(): void {


    this.serviceCliente.getCliente()
      .subscribe(resposta => this.clientes = resposta)
  }

  onSubmit(){
    this.servicePrestado.salvar(this.servico)
      .subscribe(resposta => {
        this.sucess = true;
        this.errors = null;
        this.servico = new ServicoPrestado;
      }, errorResposta => {
        this.sucess = false;
        this.errors = errorResposta.error.errors;
      })
  }

}
