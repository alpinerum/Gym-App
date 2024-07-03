import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { gymService } from './gymService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GymServiceService {

  constructor(private http: HttpClient) { }
  getServices():Observable<gymService[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};
    return this.http.get<gymService[]>('http://localhost:3000/services/getServices', options);
  }
  addService(form: any):Observable<gymService[]> {
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};
    return this.http.post<gymService[]>('http://localhost:3000/services/addService', form, options);
  }
}
