import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeType } from 'app/interfaces/employee.type';
import { EmployeeService } from 'app/modules/services/employee.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { catchError, finalize, throwError } from 'rxjs';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [NzIconModule, CurrencyPipe, NzPopconfirmModule],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss',
})
export class EmployeeCardComponent {
  @Input() employee!: EmployeeType;
  @Output() refreshList = new EventEmitter()
  private readonly router: Router = inject(Router);
  private readonly employeeService = inject(EmployeeService);
  private readonly notification = inject(NzNotificationService)

  navigateToEdit(): void {
    this.router.navigate(['employee', this.employee.id]);
  }

  deleteUser(): void {
    console.log('Usunięto pracownika');
    this.employeeService.deleteEmployee(this.employee.id).pipe(
      catchError((error) => {
        this.notification.error("","Error")
        return throwError(() => error)
      }),
      finalize(() => {
        this.notification.success("","Employee Deleted")
        this.refreshList.emit()
        // Tu będzie emit
      })
    ).subscribe();

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


  DODAĆ EMITA PRZY USUNIECIU, ZEBY W TEJ LISCIE ZREFRESZOWAĆ POBRANIE DANYCH
*/
