import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class Highlight {

  constructor(private ref: ElementRef )
   {
     this.ref.nativeElement.style.backgroundColor = 'yellow';
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.ref.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.ref.nativeElement.style.backgroundColor = '';
  }

}
