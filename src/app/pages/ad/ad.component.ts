import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-ad',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './ad.component.html',
  styleUrl: './ad.component.scss',
})
export class AdComponent {}
