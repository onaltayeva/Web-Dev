import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "../../app/models/Vacancy";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = "http://127.0.0.1:8000"
  constructor(private httpClient:HttpClient) { }

  getVacancies():Observable<Vacancy[]>{
    return this.httpClient.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/`)
  }

  createVacancy(vacancyName:string):Observable<Vacancy>{
    return this.httpClient.post<Vacancy>(`${this.BASE_URL}/api/vacancies/`,
      {name:vacancyName})
  }

  deleteVacancy(vacancy_id:number):Observable<any>{
    return this.httpClient.delete(`${this.BASE_URL}/api/vacancies/${vacancy_id}/`)
  }

  updateVacancy(vacancy_id:number, vacancyName:string):Observable<Vacancy>{
    return this.httpClient.put<Vacancy>(`${this.BASE_URL}/api/vacancies/${vacancy_id}/`,
      {name : vacancyName})
  }
  getVacanciesByCompany(company_id:number):Observable<Vacancy[]>{
    return this.httpClient.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${company_id}/vacancies/`)
  }
}

