import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Models/Usuario';
import { LoginServiceService } from '../login-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService,private router: Router) {
    
   }
  usuario: Usuario = new Usuario();
  hide: boolean = true;
  ngOnInit(): void {

    this.usuario.Nome = "";
    this.usuario.Senha = "";
  }
  handleClick() {
    this.autenticar();
  }

  autenticar() {
    console.log(this.usuario)
    this.loginService.autenticar(this.usuario)
     
      .subscribe(respota => {
        if(respota){
          this.router.navigate(['menu']);
        }else{
            alert("Usuário e/ou Senha Incorretos!");
            this.usuario.Nome ='';
            this.usuario.Senha = '';
        }
        
      });
  }
}
