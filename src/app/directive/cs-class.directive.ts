import { Directive, ElementRef, Input, OnInit } from "@angular/core";
// custom attribute directive to add class to an element
// this directive can be used to add a class to an element dynamically
// usage: <div csClass="my-class"></div>
@Directive({
  selector: '[csClass]',
    standalone: false,
})
export class csClassDirective implements OnInit {
  // data property: store class string
  @Input() csClass: string | undefined;

  // inject element ref object by angular
  constructor(private ref: ElementRef) {}

  // initialize the component
  ngOnInit(): void {
    // adding the class to element: add class logic
    this.ref.nativeElement.classList.add(this.csClass);
  }
}

  