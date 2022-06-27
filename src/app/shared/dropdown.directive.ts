import { Directive, HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen
}

 }




// when you click on the element it opens the menu
// we need to add [ngClass]="open"
// we need to set a method
