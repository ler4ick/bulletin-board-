import { Component } from '@angular/core';
import { AdvertComponent } from '../../components/advert/advert.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AdvertComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
