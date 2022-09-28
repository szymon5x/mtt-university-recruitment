import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { University } from '../interfaces/university';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesDataService {
  constructor(private http: HttpClient) {}

  fetchData(): Observable<University[]> {
    return this.http.get<University[]>('http://universities.hipolabs.com/search?name=University');
  }

  filterByCountry(country: string): Observable<University[]> {
    return this.http.get<University[]>('http://universities.hipolabs.com/search?', {
      params: { name: 'University', country }
    });
  }
}
