import { Injectable } from '@angular/core';
import { Cliente } from '../Models/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  obterClientes(): Observable<any>{
    return this.http.get<Cliente[]>("http://localhost:5000/api/clientes")
  }
  salvarCliente(cliente): Observable<any>{
    return this.http.post<any>('http://localhost:5000/api/clientes', cliente)
  }
  editarCliente(cliente): Observable<any>{
    return this.http.put<any>('http://localhost:5000/api/clientes', cliente)
  }
}
