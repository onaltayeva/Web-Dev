import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../../app/models/Company";
import {CompanyComponent} from "../../app/company/company.component";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = "http://127.0.0.1:8000"
  constructor(private httpClient: HttpClient) {
  }

  getCompanies():Observable<Company[]>{
    return this.httpClient.get<Company[]>(`${this.BASE_URL}/api/companies/`)
  }
  createCompany(companyName:string):Observable<Company>{
    return this.httpClient.post<Company>(`${this.BASE_URL}/api/companies/`,
      {name:companyName})
  }

  deleteCompany(company_id:number):Observable<any>{
    return this.httpClient.delete(`${this.BASE_URL}/api/companies/${company_id}/`)
  }

  updateCompany(company_id:number, companyName:string):Observable<Company>{
    return this.httpClient.put<Company>(`${this.BASE_URL}/api/companies/${company_id}/`,
      {name : companyName})
  }

  getCompany(company_id:number):Observable<Company>{
    return this.httpClient.get<Company>(`${this.BASE_URL}/api/companies/${company_id}/`)
  }
}
