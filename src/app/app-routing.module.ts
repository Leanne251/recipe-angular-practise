import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
 {path: "", redirectTo: '/recipes', pathMatch: 'full'},
{path: "recipes", component: RecipesComponent},
{path: "shopping-list", component: ShoppingListComponent}
]

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
