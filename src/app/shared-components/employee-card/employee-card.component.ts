import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeType } from 'app/interfaces/employee.type';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [NzIconModule, CurrencyPipe],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss',
})
export class EmployeeCardComponent {
  // wykrzyknik powoduke ze nie musze deklaowac bo mowie nim ts ze takie cos napewno wystąpi i nie bedzie null | undefined
  @Input() employee!: EmployeeType;
  private readonly router: Router = inject(Router);
  salary: number = 1000;

  navigateToEdit(): void {
    // tu dodałem zeby szło po id
    this.router.navigate(['employee', this.employee.id]);
  }

  deleteUser(): void {
    console.log('Usunięto pracownika');
    /*
      TODO
      zrobic usuwanie zawodnika z wykorzystaniem https://ng.ant.design/components/popconfirm/en zeby nie było przypadkowo
      jak sie nie uda dla ciebie to luz bo to jest z subskrybowaniem wiec w razie czego ogarniemy razem
      jak cos to wszyskie operacje są w serwisie EmployeeService
      wykorzystanie go w employe list jest
    */
  }
}

/*
  inpyt to pracownik
  do zrobienia zamienienie go w szablonie html na {{ wartosc }}

  i przerobienie tego na te liste + RWD tej listy
*/
