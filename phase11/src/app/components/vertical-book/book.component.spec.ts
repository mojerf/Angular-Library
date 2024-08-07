import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBookComponent } from './book.component';

describe('VerticalBookComponent', () => {
  let component: VerticalBookComponent;
  let fixture: ComponentFixture<VerticalBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalBookComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
