import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Typedino } from './typedino';

@Injectable({
  providedIn: 'root'
})
export class TypedinoService {

  constructor(public http: HttpClient) {}

  getTypedino(): Observable<Typedino[]>{
    return this.http.get<Typedino[]>('https://localhost:5001/api/typedinos')
  }
}