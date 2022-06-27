import { Component, Output, EventEmitter } from "@angular/core";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent{

  // @Output() featureSelected = new EventEmitter<string>()


  collapsed = true;


 // when this function is called the output is emitted so it can be caught by another component.
 // this function is passing the "feature", either 'recipes' or 'shopping-list' to a parent.
 // this emitted variable can then be caught by the parent where the component is called

//  onSelect(feature: string){
//     this.featureSelected.emit(feature)
//  }


}
