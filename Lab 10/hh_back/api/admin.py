from django.contrib import admin
from api.models import Vacancy,Company


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id','name')


@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('id','name')