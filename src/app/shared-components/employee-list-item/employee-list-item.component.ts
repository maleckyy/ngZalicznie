import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { EmployeeType } from 'app/interfaces/employee.type';
import { EmployeeService } from 'app/modules/services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list-item',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './employee-list-item.component.html',
  styleUrl: './employee-list-item.component.scss'
})
export class EmployeeListItemComponent {
  @Input() employeeId!: string
  private readonly employeeService = inject(EmployeeService)

  // powalczyc potem z ANY
  employee$: Observable<any> = this.employeeService.getEmployeeById(this.employeeId)

  ngOnInit() {
    this.employee$ = this.employeeService.getEmployeeById(this.employeeId)
  }
}
