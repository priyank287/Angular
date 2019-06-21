import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }

  getEmployees(){
    return [
      {"id":1, "name": "Ram", "age":20},
      {"id":2, "name": "Laxman", "age":22},
      {"id":3, "name": "Bharat", "age":23},
      {"id":4, "name": "Shatrugan", "age":24},
    ]
  }
}