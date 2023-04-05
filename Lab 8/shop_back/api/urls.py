from django.contrib import admin
from django.urls import path
from api import views
urlpatterns = [
    path('products/',views.product_list),
    path('products/<int:id>/',views.product_by_id),
    path('categories/',views.category_list),
    path('categories/<int:id>/',views.category_by_id),
    path('categories/<int:id>/products/',views.products_by_category)
]