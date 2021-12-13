import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EscolaComponent } from './escola/escola.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataFormComponent } from './data-form/data-form.component';
import { EscolaFormComponent } from './escola-form/escola-form.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { EnderFormComponent } from './ender-form/ender-form.component';
import { ImagesComponent } from './images/images.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    EscolaComponent,
    DataFormComponent,
    EscolaFormComponent,
    EnderecoComponent,
    EnderFormComponent,
    ImagesComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
