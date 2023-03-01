import {Component, OnInit} from '@angular/core';

import {Product, products} from '../products';
import {categories, Category} from "../categories";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  category: Category | undefined;

  constructor(private route: ActivatedRoute) {
  }

  removeFromList(index: number){
    // @ts-ignore
    this.category.products = this.category.products.filter((x) => x.id !== index);
  }

  addToList(prod: Product){};

  ngOnInit() {
    // First get the category id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    // Find the category that correspond with the id provided in route.
    this.category = categories.find((category) => category.id === categoryIdFromRoute);
  }






  // products = [...products];

  // share(product: { link: string }) {
  //   window.open('https://telegram.me/share/url?url=' + product.link);
  // }
  //
  // onNotify() {
  //   window.alert('You will be notified when the product goes on sale');
  // }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
