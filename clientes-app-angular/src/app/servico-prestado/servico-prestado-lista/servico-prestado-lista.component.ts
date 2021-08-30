import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoBusca } from './servico-pretado-busca';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.scss']
})
export class ServicoPrestadoListaComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[]
  lista: ServicoPrestadoBusca[];

  constructor() {
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {
  }

  consultar(){
    console.log(this.nome, this.mes)
  }
}
