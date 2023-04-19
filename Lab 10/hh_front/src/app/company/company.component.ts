import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../services/company/company.service";
import {Company} from "../models/Company";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
  companies:Company[] = []
  ngOnInit():void {
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies
    })
  }
  constructor(private companyService:CompanyService) {
  }

}
