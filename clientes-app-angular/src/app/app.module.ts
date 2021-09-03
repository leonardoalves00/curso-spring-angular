import { AuthService } from './auth.service';
import { ServicoPrestadoService } from './servico-prestado.service';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { ClientesService } from './clientes.service';
import { ClientesModule } from './clientes/clientes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TamplateModule } from './tamplate/tamplate.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TamplateModule,
    ClientesModule,
    HttpClientModule,
    ServicoPrestadoModule,
    FormsModule
  ],
  providers: [
    ClientesService,
    ServicoPrestadoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
