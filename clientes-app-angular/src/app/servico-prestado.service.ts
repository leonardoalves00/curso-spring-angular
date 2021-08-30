import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/servico-prestado';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servico-pretado-busca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBase + '/api/servicos-prestados';

  constructor(
    private http: HttpClient
  ) { }

    salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado>{
      return this.http.post<ServicoPrestado>(`${this.apiURL}`, servicoPrestado )
    }

    buscar(nome: string, mes: number): Observable<ServicoPrestadoBusca[]>{
      const httpParams = new HttpParams
      if(!nome){
        nome =""
      }

      httpParams.set("nome", nome)

      if(mes){
        httpParams.set("mes", mes.toString())
      }

      const url = this.apiURL + "?" + httpParams.toString();

      return this.http.get<any>(url)
    }

}
