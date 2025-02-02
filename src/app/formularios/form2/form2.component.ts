import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

interface Food {
  value: string;
  viewValue: string;
}

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule,
];

@Component({
  selector: 'app-form2',
  imports: [ReactiveFormsModule, MATERIAL_MODULES],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Form2Component {
  private fb = inject(FormBuilder);

  public personaForm: FormGroup = this.fb.group({
    nombres: [''],
    apellidos: [''],
    email: ['', [Validators.required, Validators.email]],
    genero: [''],
    food: [''],
    habilidades: this.fb.group({
      liderazgo: [''],
      comunicacion: [''],
      empatia: [''],
    }),
  });

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  onSubmit() {
    console.log(this.personaForm.value);
  }
}
