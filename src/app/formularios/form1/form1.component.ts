import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form1',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Form1Component {}
