import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import{MenuDeClientesComponent} from'./menu-de-clientes/menu-de-clientes.component';
import {ListaDeClientesComponent} from './lista-de-clientes/lista-de-clientes.component'
const routes: Routes = [
  { path: '', component: FormularioLoginComponent },
  { path: 'menu', component: MenuDeClientesComponent },
  { path: 'lista', component: ListaDeClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }