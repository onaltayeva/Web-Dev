from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Vacancy, Company
from api.serializers import CompanySerializer, VacancySerializer

@api_view(['GET','POST'])
def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    if request.method == "POST":
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
def company_detais(request,company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "GET":
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = CompanySerializer(instance=company,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == "DELETE":
        company.delete()
        return Response({"deleted":True})


@api_view(['GET'])
def vacancy_list_by_company(request,company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as e :
        return Response({'error':str(e)},status =status.HTTP_400_BAD_REQUEST)
    vacancies = Vacancy.objects.filter(company = company)
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)


@api_view(['GET','POST'])
def vacancy_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(companies, many=True)
        return Response(serializer.data)
    if request.method == "POST":
        serializer = VacancySerializer(instance=Vacancy,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','DELETE','PUT'])
def vacancy_details(request,vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id = vacancy_id)
    except Vacancy.DoesNotExist as e:
        return Response({"error":str(e)},status=status.HTTP_400_BAD_REQUEST)
    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = VacancySerializer(vacancy)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == "DELETE":
        vacancy.delete()
        return Response({"deleted":True})


@api_view(['GET'])
def vacancy_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)


