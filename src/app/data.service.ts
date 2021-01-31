import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Cliente} from '../../src/app/Models/Cliente'
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  cliente = new Cliente;
  data = new BehaviorSubject<Cliente>(this.cliente);
 
  constructor() { }

  enviarCliente(cliente: Cliente) {
    this.data.next(cliente)
  }
}
