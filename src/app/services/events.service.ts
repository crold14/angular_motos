import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/api'
  }

  getALL() {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + '/events'))
  }

  newEvent(newData: any) {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: localStorage.getItem('token') }
      )
    }
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/events/new', newData, httpOptions))
  }

}
