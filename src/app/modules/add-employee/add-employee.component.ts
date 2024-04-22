import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { EmployeeBuilder } from './employee.builder';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ReactiveFormsModule, NzFormModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  private readonly employeeService = inject(EmployeeService)

  userFormData = EmployeeBuilder.build()

  addEmployee() {
    this.employeeService.addNewEmployee(this.userFormData.value).subscribe()
  }
}
