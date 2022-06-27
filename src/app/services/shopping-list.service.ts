import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})


export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient []>()


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 3),

  ]

getIngredients(){
  // returns a copy of the ingredients!
  return this.ingredients.slice()
}


addIngredient(ingredient: Ingredient){
  this.ingredients.push(ingredient)
  this.ingredientsChanged.emit(this.ingredients.slice())
}

// addRecipeIngredients(ingredient: Ingredient){
//   this.ingredients.push(ingredient)
//   this.requiredIngredients.emit(this.ingredients.slice())
// }

addIngredients(ingredients: Ingredient[]){
  console.log("add ingredients array", ingredients)
  this.ingredients.push(...ingredients)
  console.log("add ...ingredients spread", ...ingredients)
  this.ingredientsChanged.emit(this.ingredients.slice())
}

}
