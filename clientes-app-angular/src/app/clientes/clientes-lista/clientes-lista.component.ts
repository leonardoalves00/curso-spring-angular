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
  clienteSelecionado: Cliente;
  msgSucesso: string;
  msgErro: string;

  constructor(
    private router: Router,
    private service: ClientesService,
  ) { }

  ngOnInit(): void {
    this.service.getCliente()
      .subscribe(resposta => this.clientes = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/clientes/form'])
  }

  preparaDeletar(cliente: Cliente){
    this.clienteSelecionado = cliente
  }

  deletarCliente(){
    this.service
      .deletar(this.clienteSelecionado)
      .subscribe(
        resposta => {
          this.msgSucesso = 'Cliente deletado com Sucesso.'
          this.ngOnInit()},
        erro => this.msgErro = 'Ocorreu um erro ao deletar o cliente.')
  }

}
