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

    this.setTheme(this.getTheme());

    this.onToggle.next(this.isLight);
  }

  private setTheme(theme: string) {
    document.body.setAttribute('data-theme', theme);
  }

  private getTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    return currentTheme === 'dark' ? 'light' : 'dark';
  }
}
