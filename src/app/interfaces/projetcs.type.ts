export interface ProjetsType {
  id: number | string;
  projectName: string;
  employees: string[] | [];
}

export enum Projects {
  "Hospital Web App",
  "E-Commerce",
  "No project"
}
