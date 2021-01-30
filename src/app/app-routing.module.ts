import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import{MenuDeClientesComponent} from'./menu-de-clientes/menu-de-clientes.component';
const routes: Routes = [
  { path: '', component: FormularioLoginComponent },
  { path: 'menu', component: MenuDeClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }