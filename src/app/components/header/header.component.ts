import { Component } from '@angular/core';
import { LayoutComponent } from '../common/layout/layout.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
