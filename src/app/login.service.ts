import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }
  httpOptions: Object = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  getUser():Observable<User[]>{
    return this.http.get<User[]>('https://localhost:5001/api/users');
  }
}