import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { DataFormComponent } from './data-form/data-form.component';
import { EnderFormComponent } from './ender-form/ender-form.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { EscolaFormComponent } from './escola-form/escola-form.component';
import { EscolaComponent } from './escola/escola.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EscolaService } from './service/escola.service';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClienteComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'escolas',
    component: EscolaComponent
  },
  {
    path:  'enderecos',
    component: EnderecoComponent
  },
  {
    path: 'formulario',
    component: DataFormComponent
  },
  {
    path: 'formulario/:id',
    component: DataFormComponent
  },
  {
    path: 'form-escola/:id',
    component: EscolaFormComponent
  },
  {
    path: 'form-escola',
    component: EscolaFormComponent
  },
  {
    path: 'form-endereco',
    component: EnderFormComponent
  },
  {
    path: 'form-endereco/:id',
    component: EnderFormComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: "login",
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
