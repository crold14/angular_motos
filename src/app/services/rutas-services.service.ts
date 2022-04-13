import { HttpClient } from '@angular/common/http';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Ruta } from '../interfaces/rutas.interfaces';
import { Usuario } from '../interfaces/usuario.interface';


@Injectable({
  providedIn: 'root'
})
export class RutasService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/api'
  }

  getALL(pPage: number = 1) {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + '/rutas'))
  }

  registerUser(pNewUser: Usuario) {
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/usuarios/registro', pNewUser))
  }

  loginUser(pUser: Usuario) {
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/usuarios/login', pUser))
  }
  getById(pRutasId: number) {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + `/rutas/${pRutasId}`))
  }




}
