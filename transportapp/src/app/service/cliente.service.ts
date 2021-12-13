import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/client';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  url: string = 'http://localhost:8090/cliente'

  constructor(
    private httpClient: HttpClient
  ) { }

  findAllClientes(): Observable<Cliente[]> { 
    return this.httpClient.get<Cliente[]>(this.url);
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(`${this.url}`, cliente);
  }

  deleteClienteId(id: any): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(`${this.url}/delete/${id}`);
  }

  atualizarCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${this.url}/update/${cliente.id}`, cliente);
  }

  buscarCliente(id: any): Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.url}/${id}`)
  }


}
