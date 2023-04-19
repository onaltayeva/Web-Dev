from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from api.models import Company,Vacancy
from api.serializers import CompanySerializer,VacancySerializer


class CompanyListAPIView(APIView):
    def get(self,request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryDetailAPIView(APIView):
    def get_object(self,company_id):
        try:
            return Company.objects.get(pk = company_id)
        except Company.DoesNotExist as e:
            return Response(str(e),status=status.HTTP_400_BAD_REQUEST)

    def get(self,request,company_id):
        instance = self.get_object(company_id)
        serializer = CompanySerializer (instance)
        return Response(serializer.data)

    def put(self, request, company_id):
        instance = self.get_object(company_id)
        serializer = CompanySerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, company_id):
        instance = self.get_object(company_id)
        instance.delete()
        return Response({'deleted':True})


class VacancyListByCompanyAPIView(APIView):
    def get_object(self, company_id):
        try:
            return Company.objects.get(pk = company_id)
        except Company.DoesNotExist as e:
            return Response(str(e), status = status.HTTP_400_BAD_REQUEST)

    def get(self, request, company_id):
        instance = self.get_object(company_id)
        vacancies = Vacancy.objects.all().filter(company = instance)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacancyDetailsAPIView(APIView):
    def get_object(self, vacancy_id):
        try:
            return Vacancy.objects.get(pk=vacancy_id)
        except Vacancy.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, vacancy_id):
        instance = self.get_object(vacancy_id)
        serializer = VacancySerializer(instance)
        return Response(serializer.data)

    def put(self, request, vacancy_id):
        instance = self.get_object(vacancy_id)
        serializer = VacancySerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, vacancy_id):
        instance = self.get_object(vacancy_id)
        instance.delete()
        return Response({'deleted': True})


class VacancyTop10APIView(APIView):
    def get(self,request):
        vacancies = Vacancy.objects.all().order_by("-salary")[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

