import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { EmployeeCardComponent } from 'app/shared-components/employee-card/employee-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { EmployeeService } from '../services/employee.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { Chart }from 'chart.js/auto';
import { EmployeeType } from 'app/interfaces/employee.type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EmployeeCardComponent, NzCardModule, AsyncPipe, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('chart', {static: true}) chartRef!: ElementRef;
  private readonly employeeService = inject(EmployeeService)

  chart!: Chart
  employeesList$ = this.employeeService.getEmployees()
  employeesListSubscription = this.employeeService.getEmployees().subscribe((employeesList: EmployeeType[]) => {

    const labels: string[] =  []
    const values: number[] =  []

    employeesList.forEach(employee => {
      labels.push(employee.firstName + ' ' + employee.lastName)
      values.push(employee.salary)
    })

    this.chart = new Chart(this.chartRef.nativeElement, {
      data: {
        labels: labels,
        datasets: [
          {
            type: 'bar',
            label: 'Dochód',
            data: values,
            borderWidth: 1,
            barThickness: 80,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    })
  })
}
