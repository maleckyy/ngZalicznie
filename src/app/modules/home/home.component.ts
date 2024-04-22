import { Component } from '@angular/core';
import { EmployeeCardComponent } from 'app/shared-components/employee-card/employee-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EmployeeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
