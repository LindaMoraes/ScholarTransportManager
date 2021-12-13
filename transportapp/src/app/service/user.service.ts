import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {




  constructor(

      private httpClient: HttpClient

  ) { }

  url1: string = 'http://localhost:8090/user';
  url2: string = 'http://localhost:8090/user/login?';


  login(username: string, password: string) : Observable<User> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(username + ":" + password)
      })
      
      
    };
    console.log(httpOptions);
    return this.httpClient.get<User>(this.url1, httpOptions); 
  }

  getUser(queryParams : string) : Observable<User>{
    return this.httpClient.get<User>(`${this.url2}${queryParams}`);
  }


}
