import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [NzIconModule, CurrencyPipe],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss',
})
export class EmployeeCardComponent {
  private readonly router: Router = inject(Router);
  salary: number = 1000;

  navigateToEdit() {
    this.router.navigate(['/employee/:id']);
  }

  deleteUser() {
    console.log('Usunięto pracownika');
  }
}
