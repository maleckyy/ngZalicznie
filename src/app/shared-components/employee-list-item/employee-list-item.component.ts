import { AsyncPipe, NgIf, TitleCasePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeType } from 'app/interfaces/employee.type';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-employee-list-item',
  standalone: true,
  imports: [NgIf, AsyncPipe, NzIconModule, TitleCasePipe],
  templateUrl: './employee-list-item.component.html',
  styleUrl: './employee-list-item.component.scss'
})
export class EmployeeListItemComponent {
  @Input() employee!: EmployeeType
  @Input() index!: number
  private readonly router: Router = inject(Router)

  navigateToEdit() {
    this.router.navigate(['employee', this.employee.id])
  }
}
