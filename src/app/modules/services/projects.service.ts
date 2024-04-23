import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from 'app/API_URL';
import { ProjetsType } from 'app/interfaces/projetcs.type';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly http: HttpClient = inject(HttpClient)

  getProjects() {
    return this.http.get(`${API_URL}/projects.json`).pipe(
      map((projectList: any) => {
        const projects: ProjetsType[] = []
        for (const key in projectList) {
          const project: ProjetsType = {
            id: key,
            projectName: projectList[key].projectName,
            employees: projectList[key].employees ?? [],
          };
          projects.push(project)
        };
        return projects
      })
    )
  }


}
