from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()
    def __str__(self):
        return f"Name: {self.name} Description: {self.description} City: {self.city} Address: {self.address}"
    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company,on_delete=models.CASCADE)
    def __str__(self):
        return f"Name: {self.name} Description: {self.description} Salary: {self.salary} Company:{self.company.id}"
    class Meta:
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies"