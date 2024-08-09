import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly onToggle: Subject<boolean> = new Subject();
  private isLight: boolean = false;

  public toggleTheme(newIsLight: boolean) {
    this.isLight = newIsLight;

    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);

    this.onToggle.next(this.isLight);
  }

  private setTheme(theme: string) {
    document.body.setAttribute('data-theme', theme);
  }
}
