import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  sucess: boolean = false;
  errors: string[];
  clienteId: number;

  constructor(
    private router: Router,
    private service: ClientesService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    //this.cliente = this.service.getCliente();
    this.cliente = new Cliente;
    let params: Observable<Params> = this.activatedRoute.params

    params.subscribe( url => {
      this.clienteId = url['id'];
      if(this.clienteId){
        this.service
          .getClienteId(this.clienteId)
          .subscribe(
            resposta => this.cliente = resposta,
            erro => this.cliente = new Cliente()
          )
      }
    })

  }

  onSubmit(){

    if(this.clienteId){

      this.service.atualizar(this.cliente)
        .subscribe(resposta => {
          this.sucess = true;
          this.errors = null;
        }), errorResposta =>{
          this.errors = ['Erro ao atualizar o cliente. ']
        }

    } else{

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


  }

  voltarLista(){
    this.router.navigate(['/clientes/lista'])
  }

}
