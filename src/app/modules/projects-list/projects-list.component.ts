import { Component, inject } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { ProjetsType } from 'app/interfaces/projetcs.type';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { LoadingComponent } from 'app/shared-components/loading/loading.component';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [NgIf, AsyncPipe, NgFor, NzCollapseModule, LoadingComponent ],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {
  private readonly projectsService = inject(ProjectsService)

  projects$: Observable<ProjetsType[]> = this.projectsService.getProjects()

}
