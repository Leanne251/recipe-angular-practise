import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 // View child is imported from core.
  //@ViewChild('nameInput') nameInputRef:ElementRef

  // @Output() newIngredient = new EventEmitter<Ingredient>()
  itemName: string;
  itemAmount: number;
  createIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addItem(name: any, amount: any){

     this.createIngredient = new Ingredient (name, amount)
    //  this.newIngredient.emit(this.createIngredient)

     this.shoppingListService.addIngredient(this.createIngredient)
     //const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value)

    }

}
