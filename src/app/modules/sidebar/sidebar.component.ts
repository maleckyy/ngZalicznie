import { Component, inject } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Links } from './routerLinks/routerLinks'
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NzIconModule, NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private readonly router:Router = inject(Router)
  links = Links

  navigateToPages(path: string):void {
    this.router.navigate([path])
  }
}
