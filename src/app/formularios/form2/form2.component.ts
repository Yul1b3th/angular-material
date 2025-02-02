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

@Component({
  selector: 'app-form2',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
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
  });

  onSubmit() {
    console.log(this.personaForm.value);
  }
}
