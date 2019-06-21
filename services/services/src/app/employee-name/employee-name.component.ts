import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-name',
  template:`
  <h2>The employee names</h2>
  <ul *ngFor="let employee of employees">
      <li>{{employee.name}} </li>
  </ul>
  
  
  `,
  styleUrls: []
})
export class EmployeeNameComponent implements OnInit {

  public employees=[]

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
   this.employees = this._employeeService.getEmployees();
  }


}
