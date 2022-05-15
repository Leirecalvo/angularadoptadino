import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adoption } from './adoption';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

  constructor(public http: HttpClient) { }
  httpOptions: Object = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  getAdoption():Observable<Adoption[]>{
    return this.http.get<Adoption[]>('https://localhost:5001/api/adoptions');
  }
  getAdoptionId(id:number): Observable<Adoption>{
    return this.http.get<Adoption>('https://localhost:5001/api/adoptions/' + id);
  }
  postAdoption(ad:Adoption):Observable<Adoption>{
    return this.http.post<Adoption>('https://localhost:5001/api/adoptions', ad, this.httpOptions);
  }
}

