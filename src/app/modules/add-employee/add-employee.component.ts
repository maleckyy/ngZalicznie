import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { EmployeeBuilder } from './employee.builder';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { catchError, finalize, throwError } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ReactiveFormsModule, NzFormModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  private readonly employeeService = inject(EmployeeService)
  private readonly route: ActivatedRoute = inject(ActivatedRoute)
  private readonly router: Router = inject(Router)
  private readonly notification = inject(NzNotificationService)

  employeeId: string | null = null
  userFormData = EmployeeBuilder.build()

  paramsSubscription = this.route.params.subscribe(params => {
    if(params['id']) {
      this.employeeId = params['id'];
      this.employeeService.getEmployeeById(params['id']).subscribe(employee => {
        this.userFormData.patchValue(employee)
      })
    }
  });

  buttonText(): string {
    return this.employeeId ? "Edit" : 'Add'
  }

  updateEmployee(): void {
    const employee = this.employeeId ? { ...this.userFormData.value, id: this.employeeId } : this.userFormData.value
    this.employeeService.editEmployee(employee).pipe(
      catchError((error) => {
        this.notification.error("","Error")
        return throwError(() => error)
      }),
      finalize(() => {
        this.notification.success("","Success")
        this.router.navigate(['employee-list'])
      })
    ).subscribe()
    
  }

}
