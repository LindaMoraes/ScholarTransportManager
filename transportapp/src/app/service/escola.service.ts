import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escola } from '../model/escola';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  url: string= 'http://localhost:8090/escola'
  constructor(
    private httpClient: HttpClient

  ) { }

  findAllEscolas(): Observable<Escola[]> {
    return this.httpClient.get<Escola[]>(this.url)
  }

  addEscola(escola: Escola): Observable<Escola> {
    return this.httpClient.post<Escola>(`${this.url}`, escola);
  }

  deleteEscolaId(id: any): Observable<Escola> {
    return this.httpClient.delete<Escola>(`${this.url}/delete/${id}`);
  }

  atualizarEscola(escola: Escola): Observable<Escola> {
    return this.httpClient.post<Escola>(`${this.url}/update/${escola.id}`, escola);
  }

  buscarEscola(id: any): Observable<Escola>{
    return this.httpClient.get<Escola>(`${this.url}/${id}`)
  }

}
