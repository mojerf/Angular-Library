import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoadBooksService } from '../../services/load-books.service';
import { SearchService } from '../../services/search.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isLight: boolean = false;
  searchValue = '';

  constructor(
    private themeService: ThemeService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.themeService.onToggle.subscribe((val) => {
      this.isLight = val;
    });
  }

  changeTheme() {
    this.isLight = !this.isLight;
    this.themeService.toggleTheme(this.isLight);
    document.getElementById('themeChangerIcon')!.textContent = this.isLight
      ? 'dark_mode'
      : 'light_mode';
  }

  search(e: Event) {
    const searchValue = (e.target as HTMLInputElement).value;
    this.searchService.searchFilter(searchValue);
  }
}
