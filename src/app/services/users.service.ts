import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/api'
  }



  registerUser(pNewUser: Usuario) {
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/usuarios/registro', pNewUser))
  }

  loginUser(pUser: Usuario) {
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/usuarios/login', pUser))
  }




}

