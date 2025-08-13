import { Component } from '@angular/core';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-ng-for',
  standalone: false,
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css'
})
export class NgFor {
   students = [
  
   new Student('Manoj', 1234567890, 'CSE'),
   new Student('John', 9876543210, 'ECE'),
   new Student('Alice', 1122334455, 'ME'),
   new Student('Bob', 5566778899, 'CSE'),
   new Student('Eve', 9988776655, 'ECE'),
   new Student('Charlie', 4455667788, 'ME'),
   new Student('David', 2233445566, 'CSE'), 
   new Student('Frank', 7788990011, 'ECE'),

    
  ];
  
  clearStudents() {
    this.students = [];
  }

  /*


ng-for: repeating elements for n number of times.

<html-element  *ngFor="let a of array"  ></html-element>

ngFor provides several variables

1. index-- current position--start 0
2. count- total number of items in collections
3. first- true if loop is at first position
4. last- true : last position pe
5. event- true: even position pe
6. odd - true : odd position pr


*/


}
