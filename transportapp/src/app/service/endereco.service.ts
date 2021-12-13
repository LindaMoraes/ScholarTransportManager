import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  url: string = 'http://localhost:8090/endereco' 
  constructor(
    private httpClient: HttpClient
  ) { }

findAllEnderecos(): Observable<Endereco[]>{
  return this.httpClient.get<Endereco[]>(this.url)
}

addEndereco(endereco: Endereco): Observable<Endereco> {
  return this.httpClient.post<Endereco>(`${this.url}`, endereco)
}

deleteEnderecoId(id: any): Observable<Endereco> {
  return this.httpClient.delete<Endereco>(`${this.url}/delete/${id}`)
}

atualizarEndereco(endereco: Endereco): Observable<Endereco> {
  return this.httpClient.post<Endereco>(`${this.url}/update/${endereco.id}`, endereco);
}

buscarEndereco(id: any): Observable<Endereco>{
  return this.httpClient.get<Endereco>(`${this.url}/${id}`)
}

}
