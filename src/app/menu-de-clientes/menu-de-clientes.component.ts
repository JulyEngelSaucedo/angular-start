import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-de-clientes',
  templateUrl: './menu-de-clientes.component.html',
  styleUrls: ['./menu-de-clientes.component.css']
})
export class MenuDeClientesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  handleClick() {
    this.router.navigate(['lista']);
  }

}
