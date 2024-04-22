import { Component } from '@angular/core';
import { EymployeeCardComponent } from 'app/shared-components/eymployee-card/eymployee-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EymployeeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
