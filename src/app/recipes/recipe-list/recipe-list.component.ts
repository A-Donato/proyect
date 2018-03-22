import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'this is a test', 'http://www.johaprato.com/files/styles/flexslider_full/public/tarta-ganache-doble-choco.png?itok=2ZgPxViA'),
    new Recipe('Test', 'this is a test', 'http://www.johaprato.com/files/styles/flexslider_full/public/tarta-ganache-doble-choco.png?itok=2ZgPxViA'),
    new Recipe('Test', 'this is a test', 'http://www.johaprato.com/files/styles/flexslider_full/public/tarta-ganache-doble-choco.png?itok=2ZgPxViA'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
