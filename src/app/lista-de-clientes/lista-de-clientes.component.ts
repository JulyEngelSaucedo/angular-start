import { Component, OnInit,Inject } from '@angular/core';
import { ClienteService } from '../cliente.service'
import { Cliente } from './../Models/Cliente';
import { Router } from '@angular/router';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-lista-de-clientes',
  templateUrl: './lista-de-clientes.component.html',
  styleUrls: ['./lista-de-clientes.component.css']
})
export class ListaDeClientesComponent implements OnInit {

  listaClientes:Cliente[] = new Array;
  displayedColumns: string[] = ['Nome', 'CPF', 'Data de Nascimento'];
  dataSource = this.listaClientes;
  clienteNovo:Cliente = new Cliente();
  subscription: Subscription;
  constructor(private clienteService : ClienteService,private router: Router,private data: DataService) { }
  
  ngOnInit(): void {
    this.obterClientes();
    
  }

  obterClientes(){
    this.clienteService.obterClientes().subscribe(resultado =>{

          this.listaClientes = resultado;
          console.log(this.listaClientes);
          this.dataSource = this.listaClientes;
    })
  }

  adicionarCliente(){
    
    this.data.enviarCliente(this.clienteNovo);
    this.router.navigate(['cadastro']);
  }
  editar(element:Cliente){
    this.clienteNovo = element;
    console.log("LISTA DE CADATRAO AINDA)");
    console.log(this.clienteNovo)
    this.data.enviarCliente(this.clienteNovo);
    this.router.navigate(['cadastro']);
    
  }
}
