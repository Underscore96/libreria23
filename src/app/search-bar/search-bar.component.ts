import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  @Output() searchTermChange = new EventEmitter<string>();
  books: Book[] = [];
  filteredBooks: Book[] = [];
  searchTerm: string = '';

  constructor(private bookServiceService: BookServiceService, private router: Router) {}


  ngOnInit() {
    this.bookServiceService.getBooks().subscribe(books => {
      this.books = books;
      this.filteredBooks = this.books;
    });
  }

  filterBooks() {
    this.searchTermChange.emit(this.searchTerm);
    if (!this.searchTerm) {
      this.filteredBooks = this.books;
    } else {
      this.filteredBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }









}
