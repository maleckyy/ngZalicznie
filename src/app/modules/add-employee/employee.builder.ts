import { FormGroup, FormControl, Validators } from "@angular/forms";

export class EmployeeBuilder {
  static build(): FormGroup {
    return new FormGroup({
      firstName: new FormControl<string>('', Validators.required),
      lastName: new FormControl<string>('', Validators.required),
      salary: new FormControl<number>(0 ,Validators.required),
      programmerTitle: new FormControl<string>('', Validators.required),
    });
  }
}
