import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { MenuDeClientesComponent } from './menu-de-clientes/menu-de-clientes.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaDeClientesComponent } from './lista-de-clientes/lista-de-clientes.component';
import { MatTableModule } from '@angular/material/table';
import { FormularioCadastroEdicaoComponent } from './formulario-cadastro-edicao/formulario-cadastro-edicao.component'  
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    FormularioLoginComponent,
    MenuDeClientesComponent,
    ListaDeClientesComponent,
    FormularioCadastroEdicaoComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    AppRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
