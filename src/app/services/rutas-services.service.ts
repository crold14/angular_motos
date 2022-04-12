import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RutasService {

  baseUrl: string;

  constructor(
    private hhtpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/api'
  }

  getALL(pPage: number = 1) {
    return firstValueFrom(this.hhtpClient.get<any>(this.baseUrl + '/rutas'))
  }
}
