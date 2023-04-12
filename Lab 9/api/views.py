import json
from django.http.response import JsonResponse
from api.models import Company,Vacancy
def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json,safe=False)
    if request.method == "POST":
        data = json.loads(request.body)
        name = data.get('name','')
        description = data.get('description','')
        city = data.get('city','')
        address = data.get('address','')
        company = Company.objects.create(name = name,description=description,city=city,address = address)
        return JsonResponse(company.to_json())


def company_detais(request,company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Exception:
        return JsonResponse({"error":"company does not exist"})
    if request.method == "GET":
        return JsonResponse(company.to_json())
    if request.method == "DELETE":
        company.delete()
        return JsonResponse({"deleted":True})


def vacancy_list_by_company(request,company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Exception:
        return JsonResponse({"error":"company does not exist"})
    vacancies = Vacancy.objects.filter(company = company)
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json,safe = False)


def vacancy_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json,safe = False)
    if request.method == "POST":
        data = json.loads(request.body)
        name = data.get('name', '')
        description = data.get('description', '')
        salary = data.get('salary', '')
        company = data.get('company', '')
        vacancy = Vacancy.objects.create(name=name,description =description, salary =salary, company = company)


def vacancy_details(request,vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id = vacancy_id)
    except Exception:
        return JsonResponse({"error":"Vacancy does not exist"})
    if request.method == "GET":
        return JsonResponse(vacancy.to_json())
    if request.method == "DELETE":
        vacancy.delete()
        return JsonResponse({"deleted":True})


def vacancy_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)