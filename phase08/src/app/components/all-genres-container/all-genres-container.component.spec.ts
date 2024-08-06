import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGenresContainerComponent } from './all-genres-container.component';

describe('AllGenresContainerComponent', () => {
  let component: AllGenresContainerComponent;
  let fixture: ComponentFixture<AllGenresContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllGenresContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllGenresContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
