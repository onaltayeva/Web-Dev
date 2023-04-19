import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VacancyService} from "../../services/vacancy/vacancy.service";
import {Vacancy} from "../models/Vacancy";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit{
    vacancies:Vacancy[] = []
    constructor(private route:ActivatedRoute, private vacancyService:VacancyService) {
    }
    ngOnInit():void {
      this.route.paramMap.subscribe((params) => {
        if(params.get("company_id")){
          let id = Number(params.get('company_id'))
          this.vacancyService.getVacanciesByCompany(id).subscribe((vacancies)=>{
            this.vacancies = vacancies;
          })
        }
      })
    }
}
