import {
  ComponentFixture,
  flushMicrotasks,
  TestBed,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NavbarComponent,
        RouterModule.forRoot([]),
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SHOULD create WHEN ever', () => {
    expect(component).toBeTruthy();
  });

  fit('icon SHOULD change WHEN button clicked', () => {
    // Arrange
    const themeChangerElement = fixture.debugElement.query(
      By.css('[data-testid="theme-changer-button"]')
    );
    const themeIcon = fixture.debugElement.query(By.css('#themeChangerIcon'));

    // Act
    themeChangerElement.nativeElement.click();
    fixture.detectChanges();

    // Assert
    expect(themeIcon.nativeElement.textContent).toBe('dark_mode');
  });

  fit('theme state SHOULD change WHEN button clicked', () => {
    // Arrange
    const themeChangerElement = fixture.debugElement.query(
      By.css('[data-testid="theme-changer-button"]')
    );

    // Act
    themeChangerElement.nativeElement.click();
    fixture.detectChanges();

    // Assert
    expect(component.isLight).toBeTrue();
  });
});
