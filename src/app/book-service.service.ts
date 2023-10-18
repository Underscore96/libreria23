import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  books: Array<Book> =[];

  constructor() { }

  addBook(book: Book){
    this.books.push(book);
  }
}
