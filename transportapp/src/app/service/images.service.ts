import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/client';
import { Imagem } from '../model/imagem';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  url : string = "http://localhost:8090/imagem";

  constructor(private httpClient : HttpClient) { }

  upload(files : Set<File>, id : any) {

    const formData = new FormData();
    files.forEach(file => formData.append("file", file, file.name));
    formData.append("id", id.toString());

    const request = new HttpRequest("POST", this.url, formData);

    return this.httpClient.request(request);
  }

  findAllImagens(): Observable<Imagem[]> {
    return this.httpClient.get<Imagem[]>(this.url);
  }

}
