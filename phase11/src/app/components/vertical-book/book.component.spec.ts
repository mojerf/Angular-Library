import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBookComponent } from './book.component';
import { RouterModule } from '@angular/router';
import { Book } from '../../interfaces/book.interface';

describe('VerticalBookComponent', () => {
  let component: VerticalBookComponent;
  let fixture: ComponentFixture<VerticalBookComponent>;
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
      imports: [VerticalBookComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalBookComponent);
    component = fixture.componentInstance;
    component.bookSpec = book;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
