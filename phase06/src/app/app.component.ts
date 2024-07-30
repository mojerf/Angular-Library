import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageContentComponent } from './components/main-page-content/main-page-content.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageContentComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'phase06';
}
