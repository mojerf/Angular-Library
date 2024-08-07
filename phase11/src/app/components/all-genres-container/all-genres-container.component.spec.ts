import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGenresContainerComponent } from './all-genres-container.component';
import { RouterModule } from '@angular/router';

describe('AllGenresContainerComponent', () => {
  let component: AllGenresContainerComponent;
  let fixture: ComponentFixture<AllGenresContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllGenresContainerComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AllGenresContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
