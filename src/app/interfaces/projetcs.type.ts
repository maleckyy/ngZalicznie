export interface ProjetsType {
  id: number | string;
  projectName: string;
  employees: string[] | [];
}

export enum Projects {
  "Hospital Web App" = 0,
  "E-Commerce" = 1,
  "No project" = 2
}
