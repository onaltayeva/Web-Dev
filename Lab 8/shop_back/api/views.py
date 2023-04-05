from django.http.response import JsonResponse
from api.models import Product,Category
# Create your views here.
def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json,safe= False)


def product_by_id(request,id):
    try:
        product = Product.objects.get(id = id)
    except Exception:
        return JsonResponse({'error': "Product does not exits"})
    return JsonResponse(product.to_json())


def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json,safe=False)


def category_by_id(request,id):
    try:
        category = Category.objects.get(id = id)
        return JsonResponse(category.to_json())
    except Exception:
        return JsonResponse({"error":"Category does not exist"})


def products_by_category(request,id):
    try:
        category = Category.objects.get(id = id)
    except Exception:
        return JsonResponse({"error":"category does not exist"})
    products = Product.objects.filter(category = category)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json,safe = False)




