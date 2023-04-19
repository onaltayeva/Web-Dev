import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../services/company/company.service";
import {Company} from "../models/Company";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit{
  company!: Company;
  constructor(private route : ActivatedRoute, private companyService: CompanyService) {
  }
  ngOnInit():void{
    this.route.paramMap.subscribe((params) =>{
      if(params.get('company_id')){
        let id = Number(params.get('company_id'))
        this.companyService.getCompany(id).subscribe((company)=>{
          this.company = company;
        })
      }
    })
  }
}
