import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any> {
    // Este metodo futuramente se conectara con el backend para traer los datos
    return this.http.get('../../assets/data/data.json');
  }
}
