import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  books: Book[] = [];
  searchTerm: string = '';
  filteredBooks: Book[] = [];

  constructor(private bookService: BookServiceService, public router: Router) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }


  filterBooks() {
    if (!this.searchTerm) {
 
      this.filteredBooks = this.books;
    } else {

      this.filteredBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}

