import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./modules/home/home.component").then(x => x.HomeComponent)
  },
  {
    path: "employee-list",
    loadComponent: () => import("./modules/employees-list/employees-list.component").then(x => x.EmployeesListComponent)
  },
  {
    path: "employee/:id",
    loadComponent: () => import("./modules/add-employee/add-employee.component").then(x => x.AddEmployeeComponent)
  },
  {
    path: "employee-new",
    loadComponent: () => import("./modules/add-employee/add-employee.component").then(x => x.AddEmployeeComponent)
  },
  {
    path: "project-list",
    loadComponent: () => import("./modules/projects-list/projects-list.component").then(x => x.ProjectsListComponent)
  },
  {
    path: "**",
    redirectTo: ''
  },
];
