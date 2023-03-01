import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../products";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  likeCounter : number;
  @Input() productFromCategory : {
    description: string | undefined;
    id: number | undefined;
    image: string | undefined;
    link: string | undefined;
    name: string | undefined;
    price: number | undefined;
    rating: number | undefined
  };
  @Output() newItemEvent = new EventEmitter();

  constructor() {
    this.likeCounter = 0;
    this.productFromCategory = new class implements Product {
      // @ts-ignore
      description: string | undefined;
      // @ts-ignore
      id: number | undefined;
      // @ts-ignore
      image: string | undefined;
      // @ts-ignore
      link: string | undefined;
      // @ts-ignore
      name: string | undefined;
      // @ts-ignore
      price: number | undefined;
      // @ts-ignore
      rating: number | undefined;
    }
  }

  toLike(){
    this.likeCounter++;
  }

  removeItem() {
    this.newItemEvent.emit(this.productFromCategory.id);
  }

  share() {
    window.open('https://telegram.me/share/url?url=' + this.productFromCategory.link);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
