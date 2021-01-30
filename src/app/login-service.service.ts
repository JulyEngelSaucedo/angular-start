import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Usuario } from './Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  autenticar(usuario: Usuario): Observable<any> {
    return this.http.post<any>('http://localhost:5000/api/autenticacao', usuario)
      
  }
}
