import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getRepository(repositoryName: string):Observable<any> {
    return this.http.get(`https://api.github.com/repos/${repositoryName}`);
  }
}
