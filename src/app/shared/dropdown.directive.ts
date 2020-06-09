import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})
export class DropdownDirective {
  @HostBinding('class.show') isShow = false;
  @HostListener('click') toggleShow() {
    this.isShow = !this.isShow;
  }
  constructor() { }

}
