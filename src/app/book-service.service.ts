import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
 
  private apiURL = 'https://652d3900f9afa8ef4b270a94.mockapi.io/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiURL);
  }

  getBookById(id: string): Observable<Book> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Book>(url);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiURL, book);
  }

  removeBook(bookId: string): Observable<void> {
    const url = `${this.apiURL}/${bookId}`;
    return this.http.delete<void>(url);
  }
}
