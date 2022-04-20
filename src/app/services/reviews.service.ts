import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/api'
  }

  getById(idRoute: number) {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + '/reviews/' + idRoute))
  }
}
