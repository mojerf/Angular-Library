import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalBookComponent } from './book.component';
import { RouterModule } from '@angular/router';
import { Book } from '../../interfaces/book.interface';

describe('HorizontalBookComponent', () => {
  let component: HorizontalBookComponent;
  let fixture: ComponentFixture<HorizontalBookComponent>;
  let book: Book = {
    name: 'test',
    image: 'http://google.com/image',
    genre: ['horror', 'science'],
    author: 'mamad',
    publishData: '1400',
    price: 200,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalBookComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HorizontalBookComponent);
    component = fixture.componentInstance;
    component.bookSpec = book;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
