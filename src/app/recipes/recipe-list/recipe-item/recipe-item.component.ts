import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe
  // @Output() selectedRecipe = new EventEmitter<void>()

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
  }


// onSelectedItem(  ){
//   this.selectedRecipe.emit()
// }

onSelectedItem(){

  // this emitter is 'joined' to the EventEmitter in the service.
  this.recipeService.recipeSelected.emit(this.recipe)
}
}
