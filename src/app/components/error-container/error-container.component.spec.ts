import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorContainerComponent } from './error-container.component';
import { By } from '@angular/platform-browser';

describe('ErrorContainerComponent', () => {
  let component: ErrorContainerComponent;
  let fixture: ComponentFixture<ErrorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SHOULD create WHEN ever', () => {
    expect(component).toBeTruthy();
  });

  it('SHOULD show propper message WHEN ever ', () => {
    // Arrange
    const message = 'This is my message';
    component.errorMessage = message;

    // Act
    fixture.detectChanges();
    const textBox = fixture.debugElement.query(
      By.css('[data-testid="error-message"]')
    ).nativeElement;

    // Assert
    expect(textBox.textContent).toBe(message);
    expect(fixture.nativeElement.textContent).toContain(message);
  });
});
