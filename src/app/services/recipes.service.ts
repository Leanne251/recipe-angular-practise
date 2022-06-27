import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

constructor(private shoppingListService: ShoppingListService){

}
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe('Green Salad', 'Mix everything together', "./assets/images/food.jpg",
    [
      new Ingredient ("lettuce", 1),
      new Ingredient ("tomato", 1),
      new Ingredient ("cucumber", 1)
    ]),
    new Recipe('Pancakes', 'Make a batter', "./assets/images/pancakes.jpg",
    [
      new Ingredient ("milk", 1),
      new Ingredient ("flour", 1),
    new Ingredient ("butter", 1)
    ])]

getRecipes(){
  //provides a copy of the array
  return this.recipes.slice();
}


addIngredientsToShoppingList(ingredients: Ingredient[]){
  this.shoppingListService.addIngredients(ingredients)
}



}
