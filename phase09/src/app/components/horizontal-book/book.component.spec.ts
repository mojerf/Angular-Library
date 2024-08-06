import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalBookComponent } from './book.component';

describe('HorizontalBookComponent', () => {
  let component: HorizontalBookComponent;
  let fixture: ComponentFixture<HorizontalBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalBookComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HorizontalBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
