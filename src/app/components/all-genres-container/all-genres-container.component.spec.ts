import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllGenresContainerComponent } from './all-genres-container.component';
import { RouterModule } from '@angular/router';
import { LoadBooksService } from '../../services/load-books.service';
import { By } from '@angular/platform-browser';

describe('AllGenresContainerComponent', () => {
  let component: AllGenresContainerComponent;
  let fixture: ComponentFixture<AllGenresContainerComponent>;
  let mockBookService: jasmine.SpyObj<LoadBooksService>;

  beforeEach(async () => {
    mockBookService = jasmine.createSpyObj<LoadBooksService>(['getAllgenre']);

    await TestBed.configureTestingModule({
      imports: [AllGenresContainerComponent, RouterModule.forRoot([])],
      providers: [{ provide: LoadBooksService, useValue: mockBookService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AllGenresContainerComponent);
    component = fixture.componentInstance;
  });

  it('SHOULD create WHEN ever', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('SHOULD get all genres WHEN creates', () => {
    // Arrange
    const genres = ['Horro', 'Crime', 'Fiction'];
    mockBookService.getAllgenre.and.returnValue(genres);
    // Act
    fixture.detectChanges();
    // Assert
    expect(component.allGenre).toEqual(genres);
  });

  it('SHOULD render genres WHEN created', () => {
    // Arrange
    fixture.detectChanges();
    const genres = ['Horro', 'Crime', 'Fiction'];
    component.allGenre = genres;
    fixture.detectChanges();

    // Act
    const genresContainer = fixture.debugElement.query(
      By.css('[data-testid="genre-container"]')
    );

    // Assert
    expect((genresContainer.nativeElement as HTMLElement).textContent).toEqual(
      genres.join('')
    );
  });
});
