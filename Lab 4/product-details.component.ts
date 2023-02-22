import { Component,OnInit} from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import {Products,products} from "../products";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product: Products | undefined;
  constructor(private route: ActivatedRoute,private cartService : CartService) {
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  addToCart(product : Products){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
