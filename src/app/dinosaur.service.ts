import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dinosaur } from './dinosaur';
import { Observable } from 'rxjs';
import { Typedino } from './typedino';

@Injectable({
  providedIn: 'root'
})
export class DinosaurService {

  constructor(public http: HttpClient) { }
  httpOptions: Object = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getDinosaur(): Observable<Dinosaur[]>{
    return this.http.get<Dinosaur[]>('https://localhost:5001/api/dinosaurs')
  }
  getDinosaurId(id:number):Observable<Dinosaur>{
    return this.http.get<Dinosaur>('https://localhost:5001/api/dinosaurs/' + id);
  }
  getTypedino(): Observable<Typedino[]>{
    return this.http.get<Typedino[]>('https://localhost:5001/api/typedinos')
  }
  putDinosaur(id:number, di:Dinosaur):Observable<Dinosaur>{
    return this.http.put<Dinosaur>('https://localhost:5001/api/dinosaurs/' + id, di, this.httpOptions);
  }
}