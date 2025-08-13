import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  standalone: false,
  templateUrl: './ng-style.html',
  styleUrl: './ng-style.css'
})
export class NgStyle {

   stylesObj={
    color:'blue',
   'background-color': 'black',
    padding: '10px',
    borderRadius: '10%',
  }


  changeStyles() {    
    this.stylesObj.borderRadius = '0px';
    this.stylesObj['background-color'] = 'red';
  }


  


}

/*

[ngStyle]= allow to add or remove inline styles on html elements based on expression

syntax

<div [ngStyle]="{'styleNames':'expression'}" ></div>


*/

