import { AuthService } from './../auth.service';
import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  cadastrando: boolean;
  success: string;
  errors: String[];

  constructor(
    private router: Router,
    private service: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.router.navigate(['/home'])

  }

  preparaCadastro(event){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario
    usuario.username = this.username
    usuario.password = this.password
    this.service.salvar(usuario)
      .subscribe(resposta => {
        this.success = "cadastro realizado com sucesso."
        this.cadastrando = false
        this.username = ''
        this.password = ''
        this.errors = [];
      }, errorResponse => {
        this.errors = errorResponse.erro.errors;
        this.success = null;
      })
  }
}
