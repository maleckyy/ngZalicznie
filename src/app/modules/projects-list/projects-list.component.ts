import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { finalize, map, Observable } from 'rxjs';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { LoadingComponent } from 'app/shared-components/loading/loading.component';
import { EmployeeListItemComponent } from 'app/shared-components/employee-list-item/employee-list-item.component';
import { EmployeeService } from '../services/employee.service';
import { EmployeeType } from 'app/interfaces/employee.type';
import { Project } from 'app/interfaces/projects.type';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [NgIf, AsyncPipe, NgFor, NzCollapseModule, LoadingComponent, EmployeeListItemComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {
  private readonly employeeService = inject(EmployeeService)

  isLoading: boolean = false
  projects: Project[] = [
    {
      title: 'No project',
      employees: []
    },
    {
      title: 'Hospital Web App',
      employees: []
    },
    {
      title: 'E-Commerce',
      employees: []
    },
  ]

  employeesSubscription = this.employeeService.getEmployees().pipe(
    map(employees => {
      this.isLoading = true
      employees.forEach(employee => {
        switch (employee.project) {
          case 1:
            this.projects[1].employees.push(employee);
            return
          case 2:
            this.projects[2].employees.push(employee);
            return
          default:
            this.projects[0].employees.push(employee);
        }
      })
      return employees
    }),
    finalize(() => {
      this.isLoading = false
    })
  ).subscribe()
}
