import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('SHOULD create WHEN ever', () => {
    expect(service).toBeTruthy();
  });

  it('SHOULD change theme WHEN called', () => {
    // Arrange
    // Act
    service.onToggle.subscribe((themeState) => {
      expect(themeState).toBeTrue();
    });
    // Assert
    service.toggleTheme(true);
  });
});
