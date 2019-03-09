import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientUrl = 'http://localhost:8080/client/all';
  constructor(private readonly http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get(this.clientUrl);
  }
}
