import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icelular } from '../models/celular.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url =
    'https://68570acd21f5d3463e5455d3.mockapi.io/Celulares/celulares';

  constructor(private http: HttpClient) {}

  public getCelulares(): Observable<Icelular[]> {
    return this.http.get<Icelular[]>(this.url);
  }

  public getCelularbyId(id: number): Observable<Icelular> {
    return this.http.get<Icelular>(`${this.url}/${id}`);
  }

  public postCelular(celular: Icelular): Observable<Icelular> {
    return this.http.post<Icelular>(`${this.url}`, celular);
  }

  public putCelular(celular: Icelular): Observable<Icelular> {
    return this.http.put<Icelular>(`${this.url}/${celular.id}`, celular);
  }

  public deleteCelular(id: number): Observable<Icelular> {
    return this.http.delete<Icelular>(`${this.url}/${id}`);
  }
}
