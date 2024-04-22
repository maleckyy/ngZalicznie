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
    loadComponent: () => import("./modules/employee-details/employee-details.component").then(x => x.EmployeeDetailsComponent)
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
// home
//emp list > dodac i edyt V
// add-emp ten sam form
// edit-emp ten sam form
// project [4x proj] projet [ idEmp ]

