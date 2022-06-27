import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipesService) { }

  selectedRecipe: Recipe;

  ngOnInit(): void {
// set up a 'listner' with subscribe. first part is the data you get back () => {} second part is what you want to do with it in this file!

// so rather than pass data through functions / output and event emitter, we have use the service to cut out components in the flow... now LIST ITEM -> SERVICE -> RECIPE COMP
//before: list item > list > recipe comp (Ok, so the same... but would be handy for bigger arcitecture!)

this.recipeService.recipeSelected.subscribe(
  (recipe:Recipe) => {
    this.selectedRecipe = recipe
  }

)
  }

}
