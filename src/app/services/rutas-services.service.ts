import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  //para meter la cabecera de authentication en la peticion
  newRuta(pNewRuta: Ruta) {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: localStorage.getItem('token') }
      )
    }
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/rutas/new', pNewRuta, httpOptions))
  }




}
