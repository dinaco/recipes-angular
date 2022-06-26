import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Lasagna',
      'Layers and layers and sauce',
      'https://www.thespruceeats.com/thmb/-YUYSXc4T2H4P8o2JBApzJ3F5rw=/2069x2069/smart/filters:no_upscale()/white-and-red-sauce-lasagna-recipe-995925-hero-1-fb2c2142b39042069f0c50310047256d.jpg'
    ),
    new Recipe(
      'Burger',
      'Bun and pattie',
      'https://media-cdn.tripadvisor.com/media/photo-s/0d/38/d6/95/4-tipos-de-bacon-em-um.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
