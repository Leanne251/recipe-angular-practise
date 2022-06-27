import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
   recipes: Recipe[]
//  recipes: Recipe[] = [
//   new Recipe('Green Salad', 'Mix everything together', "./assets/images/food.jpg"),
//   new Recipe('Pancakes', 'Make a batter', "./assets/images/pancakes.jpg")
//   ]

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
this.recipes = this.recipesService.getRecipes()
  }

// replaced by a service!
  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe)
  // }
}
