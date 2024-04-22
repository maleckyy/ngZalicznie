import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss'
})
export class EmployeeCardComponent {

  private readonly router: Router = inject(Router)

  navigateToEdit() {
    this.router.navigate(['/employee/:id']);
  }

  deleteUser() {
    console.log('Usunięto pracownika');
  }
}
