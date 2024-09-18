import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { AdComponent } from './pages/ad/ad.component';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';
import { NewAdComponent } from './pages/new-ad/new-ad.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    AdComponent,
    MyAdsComponent,
    NewAdComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bulletin-board';
}
