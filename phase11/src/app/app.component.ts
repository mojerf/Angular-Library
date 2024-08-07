import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageContentComponent } from './components/main-page-content/main-page-content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterCComponent } from './components/footer-c/footer-c.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainPageContentComponent,
    NavbarComponent,
    CommonModule,
    FooterCComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Main Page';
}
