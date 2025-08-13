import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  standalone: false,
  templateUrl: './ng-class.html',
  styleUrl: './ng-class.css'
})
export class NgClass {

//  obj='primary fontStyle';
// obj=['primary', 'fontStyle'];
// obj=['secondary', 'fontStyle'];
// obj={primary: true, fontStyle: true};
// obj={primary: true, secondary: false, fontStyle: true};
 obj={primary: false, secondary: true, fontStyle: true};



primary = true;
ob={
  primary: this.primary,
  secondary: !this.primary,
  fontStyle: true
}

togglePrimary() {
  this.primary = !this.primary;
  this.ob.primary = this.primary;
  this.ob.secondary = !this.primary;
  console.log(this.primary);
  console.log("ob::"+JSON.stringify(this.ob));
 
}

toogleFontStyle() {
  this.ob.fontStyle = !this.ob.fontStyle;
  console.log(this.ob.fontStyle);
}
}


/*


[ngClass]=> directive (attribute) add or remove css classes to an HTML
elements

Syntax:

<div [ngClass]="expression" ></div>
epxress must return:
string
array
object




*/
