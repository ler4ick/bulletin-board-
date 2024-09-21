import { Component } from '@angular/core';
import { NewAdvertComponent } from '../../components/new-advert/new-advert.component';

@Component({
  selector: 'app-my-ads',
  standalone: true,
  imports: [NewAdvertComponent],
  templateUrl: './my-ads.component.html',
  styleUrl: './my-ads.component.scss',
})
export class MyAdsComponent {}
