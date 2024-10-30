import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupDTO } from './models/signup-dto.model'; // Importar seu DTO
import { LoginDTO } from './models/login-dto.model'; // Importar seu DTO de Login

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/auth'; // URL da sua API

  constructor(private http: HttpClient) {}

  signup(data: SignupDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }

  login(data: LoginDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  buscarTodos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/buscarTodos`);
  }
}
