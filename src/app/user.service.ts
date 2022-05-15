import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  httpOptions: Object = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  getUser():Observable<User[]>{
    return this.http.get<User[]>('https://localhost:5001/api/users');
  }
  getUserId(id:number):Observable<User>{
    return this.http.get<User>('https://localhost:5001/api/users/' + id);
  }
  postUser(ue:User):Observable<User>{
    return this.http.post<User>('https://localhost:5001/api/users', ue, this.httpOptions);
  }
  deleteUser(id:number):Observable<User>{
    return this.http.delete<User>('https://localhost:5001/api/users/' + id);
  }
  putUser(id:number, us:User):Observable<User>{
    return this.http.put<User>('https://localhost:5001/api/users/' + id, us, this.httpOptions);
  }
}