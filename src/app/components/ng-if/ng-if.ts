import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: false,
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css'
})
export class NgIf {

active=false;
count=1;
changeState() {
  this.active = !this.active;
}

}
