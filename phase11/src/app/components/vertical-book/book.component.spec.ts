import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBookComponent } from './book.component';
import { RouterModule } from '@angular/router';
import { Book } from '../../interfaces/book.interface';
import { By } from '@angular/platform-browser';

describe('VerticalBookComponent', () => {
  let component: VerticalBookComponent;
  let fixture: ComponentFixture<VerticalBookComponent>;
  let fakeBook: Book = {
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
    component.bookSpec = fakeBook;
    fixture.detectChanges();
  });

  it('SHOULD create WHEN ever', () => {
    expect(component).toBeTruthy();
  });

  it('image SHOULD have proper src WHEN ever', () => {
    // Arrange
    // Act
    const image = fixture.debugElement.query(
      By.css('[data-testid="book-image"]')
    ).nativeElement;
    // Assert
    expect(image.src).toBe(fakeBook.image);
  });
});
