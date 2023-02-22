import { Component } from '@angular/core';
import {CartService} from "../cart.service";
import {FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  checkoutForm = this.formBuilder.group({
    name : '',
    address : ''
  });
  items = this.cartService.getItems();
  constructor(
    private cartService : CartService,
    private formBuilder : FormBuilder
  ) {
  }
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted",this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
