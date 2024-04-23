import { Component, inject } from '@angular/core';
import { EmployeeCardComponent } from 'app/shared-components/employee-card/employee-card.component';
import { EmployeeService } from '../services/employee.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { EmployeeType } from 'app/interfaces/employee.type';
import { LoadingComponent } from 'app/shared-components/loading/loading.component';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [EmployeeCardComponent, NgIf, NgFor, AsyncPipe, LoadingComponent],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss'
})
export class EmployeesListComponent {
  private readonly employeeService = inject(EmployeeService)

  employees$: Observable<EmployeeType[]> = this.employeeService.getEmployees()
}
