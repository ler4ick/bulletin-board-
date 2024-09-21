import { Component } from '@angular/core';
import { InputComponent } from '../../components/common/input/input.component';

@Component({
  selector: 'app-new-ad',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './new-ad.component.html',
  styleUrl: './new-ad.component.scss',
})
export class NewAdComponent {}
