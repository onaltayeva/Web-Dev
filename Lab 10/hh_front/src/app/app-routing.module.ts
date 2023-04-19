import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from "./company/company.component";
import {CompanyDetailsComponent} from "./company-details/company-details.component";
import {VacancyComponent} from "./vacancy/vacancy.component";

const routes: Routes = [
  {
    path: 'companies',
    component : CompanyComponent,
  },
  {
    path:'companies/:company_id',
    component: CompanyDetailsComponent
  },
  {
    path:'companies/:company_id/vacancies',
    component:VacancyComponent
  },
  {
    path: '', redirectTo: 'companies',pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
