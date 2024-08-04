export interface Book {
  id: string;
  isbn: string;
  book_title: string;
  book_author: string;
  year_of_publication: string;
  publisher: string;
  image_url_s: string;
  image_url_m: string;
  image_url_l: string;
}

export interface BookJson {
  books: Book[];
  current_page_number: number;
  pages: number;
}
