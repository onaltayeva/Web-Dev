import { Component } from '@angular/core';
import { categories } from "../categories";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categoryProducts = categories;
}
