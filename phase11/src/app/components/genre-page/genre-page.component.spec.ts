import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrePageComponent } from './genre-page.component';
import { RouterModule } from '@angular/router';

describe('GenrePageComponent', () => {
  let component: GenrePageComponent;
  let fixture: ComponentFixture<GenrePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenrePageComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(GenrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
