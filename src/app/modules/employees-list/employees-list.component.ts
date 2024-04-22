import { Component } from '@angular/core';
import { EmployeeCardComponent } from 'app/shared-components/employee-card/employee-card.component';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [EmployeeCardComponent],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss'
})
export class EmployeesListComponent {

}
