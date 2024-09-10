import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterCComponent } from './footer-c.component';

describe('FooterCComponent', () => {
  let component: FooterCComponent;
  let fixture: ComponentFixture<FooterCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SHOULD create WHEN ever', () => {
    expect(component).toBeTruthy();
  });
});
