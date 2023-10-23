import { Component, OnInit } from "@angular/core";
import { BookServiceService } from "../book-service.service";
import { Book } from '../book';
import { Router } from "@angular/router";


@Component({
  selector: "app-display-book",
  templateUrl: "./display-book.component.html",
  styleUrls: ["./display-book.component.scss"]
})
export class DisplayBookComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookServiceService, public router:Router) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  removeBook(book: Book) {
    this.bookService.removeBook(book.id.toString()).subscribe(() => {
      this.books = this.books.filter(b => b !== book);
    });
  }

  navigateToDetail(book: Book) {
    this.router.navigate(['/detail', book.id]);
  }
  
  
}
