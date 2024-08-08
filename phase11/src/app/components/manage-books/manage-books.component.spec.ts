import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBooksComponent } from './manage-books.component';
import { RouterModule } from '@angular/router';

describe('ManageBooksComponent', () => {
  let component: ManageBooksComponent;
  let fixture: ComponentFixture<ManageBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageBooksComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SHOULD create WHEN ever', () => {
    expect(component).toBeTruthy();
  });
});
