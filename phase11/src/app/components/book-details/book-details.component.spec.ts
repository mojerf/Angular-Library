import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDetailsComponent } from './book-details.component';
import { RouterModule } from '@angular/router';
import { Book } from '../../interfaces/book.interface';
import { By } from '@angular/platform-browser';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
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
      imports: [BookDetailsComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    component.bookDetails = fakeBook;
    fixture.detectChanges();
  });

  it('SHOULD create WHEN ever', () => {
    expect(component).toBeTruthy();
  });

  it('SHOULD render title WHEN ever', () => {
    // Arrange
    const bookDetailTitle = fixture.debugElement.query(
      By.css('[data-testid="book-datail-title"]')
    );
    // Act
    // Assert
    expect(bookDetailTitle.nativeElement.innerText).toBe(fakeBook.name);
  });
});
