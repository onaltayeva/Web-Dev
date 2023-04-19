from django.contrib import admin
from django.urls import path
from api import views
urlpatterns = [
    path('companies/',views.company_list),
    path('companies/<int:company_id>/',views.company_detais),
    path('companies/<int:company_id>/vacancies/',views.vacancy_list_by_company),



    path('vacancies/',views.vacancy_list),
    path('vacancies/<int:vacancy_id>/',views.vacancy_details),
    path('vacancies/top_ten/',views.vacancy_top_ten)
]