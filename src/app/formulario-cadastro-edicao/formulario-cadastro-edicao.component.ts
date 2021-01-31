import { Component, OnInit, Inject } from '@angular/core';
import { Cliente } from '../Models/Cliente'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from "../data.service";
import { ClienteService } from "../cliente.service";

@Component({
  selector: 'app-formulario-cadastro-edicao',
  templateUrl: './formulario-cadastro-edicao.component.html',
  styleUrls: ['./formulario-cadastro-edicao.component.css']
})
export class FormularioCadastroEdicaoComponent implements OnInit {
  cliente;
  subscription: Subscription;
  editar:boolean = false;
  constructor(private data: DataService, private clienteService:ClienteService,private router: Router) {

  }

  ngOnInit(): void {
   
  
    this.subscription = this.data.data.subscribe(cliente => {
      
      this.cliente = cliente
      console.log(this.cliente)
      if(this.cliente.nome === undefined){
        this.cliente.Nome = "";
        this.cliente.CPF = "";
        this.cliente.dataNascimento = "";
        this.cliente.telefones = new Array;
        
      }else{
        this.editar = true;
      }
      
    })

  }
  criarCliente() {
    console.log(this.cliente.dataNascimento);
    this.cliente.dataNascimento = this.converter(this.cliente.dataNascimento);
    console.log(this.cliente.dataNascimento);
    if(this.editar){
      this.clienteService.editarCliente(this.cliente).subscribe(resultado =>{

        alert("Usuário Editado com Sucesso!");
      })

    }else{
    this.clienteService.salvarCliente(this.cliente).subscribe(resultado =>{
      this.cliente = new Cliente();

      alert("Usuário criado com Sucesso!");
     });
    }


  }
  adicionarTelefone() {
    this.cliente.telefones.push("");
  }
  mudarValor(index,valor){
    console.log(valor)
    console.log(index)
   this.cliente.telefones[index] = valor;
   
  }
   converter(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  voltar(){
    this.router.navigate(['lista']);
  }


}
