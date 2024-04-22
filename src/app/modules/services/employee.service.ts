import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from 'app/API_URL';
import { EmployeeType } from 'app/interfaces/employee.type';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly http: HttpClient = inject(HttpClient)

  getEmployees() {
    return this.http.get(API_URL + "/employees.json").pipe(
      map((employees:any) => {
        const employeesList: EmployeeType[] = []
        for (const key in employees) {
          const employee: EmployeeType = {
            id: key,
            firstName: employees[key].firstName,
            lastName: employees[key].lastName,
            salary: employees[key].salary,
            programmerTitle: employees[key].programmerTitle
          };
          employeesList.unshift(employee)
        };
        return employees
      })
    )
  }

  addNewEmployee(employee: EmployeeType) {
    return this.http.post(API_URL + "/employees.json", employee)
  }

  editEmployee(employee: EmployeeType) {
    return this.http.patch(`${API_URL}/employees/${employee.id}.json`, employee)
  }

  deleteEmployee(id:string) {
    return this.http.delete(`${API_URL}/employees/${id}.json`)
  }
}
