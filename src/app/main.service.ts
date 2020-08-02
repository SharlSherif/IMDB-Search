import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  fetchResults(query: string): Observable<any> {
    return this.http.get('https://www.omdbapi.com/?apikey=7d599c48&s=' + query);
  }
}
