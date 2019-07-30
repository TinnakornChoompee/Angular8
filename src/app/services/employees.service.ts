import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  getEmployee() {
    return [
      {"id": 1, "name" : "Tinnakorn", "age" : 30},
      {"id": 2, "name" : "NajA", "age" : 28},
      {"id": 3, "name" : "BelL", "age" : 18},
    ]
  }
}
