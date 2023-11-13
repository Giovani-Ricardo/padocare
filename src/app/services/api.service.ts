import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  // private apiUrl: string = 'http://localhost:3000';
  private apiUrl: string = 'http://192.168.56.1:3000';

  private user: any = this.getUser();
  private token: string = this.user ? this.user.token : ''
  private options: any = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': this.token
      }
    )
  };

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    let res = this.http.post(`${this.apiUrl}/login`, {email: email, password: password},this.options);
    this.token = this.getToken();
    this.options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': this.token
        }
      )
    }
    return res
  }

  registrarAcesso(type: number){
    return this.http.post(`${this.apiUrl}/acesso`, {type_id: type},this.options);
  }

  criarUsuario(params: any){
    return this.http.post(`${this.apiUrl}/criar_usuario`, {user: params}, this.options);
  }

  deletarUsuario(id: number){
    return this.http.delete(`${this.apiUrl}/users/${id}`, this.options)
  }

  atualizarUsuario(user: any){
    return this.http.put(`${this.apiUrl}/users/${user.id}`, {user: user},this.options)
  }

  obterRegistrosDeAcesso(){
    return this.http.get(`${this.apiUrl}/acessos`, this.options);
  }

  obterUsuarios(){
    return this.http.get(`${this.apiUrl}/users`, this.options);
  }

  getUser(){
    let user: any = localStorage.getItem('user');
    return JSON.parse(user);
  }

  getToken(){
    let user = this.getUser();
    try {
      return user.token;
    } catch {
      return '';
    }
  }

}
