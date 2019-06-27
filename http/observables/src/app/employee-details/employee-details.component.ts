import { EmployeeService } from "./../employee.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee-details",
  template: `
    <h2>The employee details</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name }} {{ employee.age }} {{ employee.address }}</li>
    </ul>
  `,
  styleUrls: []
})
export class EmployeeDetailsComponent implements OnInit {
  public employees = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService
      .getEmployees()
      .subscribe(data => (this.employees = data));
  }
}
