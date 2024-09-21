import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// components
import { LayoutComponent } from './components/common/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { AnnouncementBoardComponent } from './components/announcement-board/announcement-board.component';

// pages
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { AdComponent } from './pages/ad/ad.component';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';
import { NewAdComponent } from './pages/new-ad/new-ad.component';
import { SettingsComponent } from './pages/settings/settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutComponent,
    HeaderComponent,
    AnnouncementBoardComponent,
    HomeComponent,
    SearchComponent,
    AdComponent,
    MyAdsComponent,
    NewAdComponent,
    SettingsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bulletin-board';
}
