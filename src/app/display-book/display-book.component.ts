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

  filteredBooks: Book[] = [];
  searchTerm: string = '';
  public isAscendingSort: Boolean = true;

  constructor(private bookService: BookServiceService, public router: Router) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
      this.applySearchFilter(this.searchTerm); 
    });
  }

  removeBook(book: Book) {
    this.bookService.removeBook(book.id.toString()).subscribe(() => {
      this.books = this.books.filter(b => b !== book);
      this.applySearchFilter(this.searchTerm); 
    });
  }

  navigateToDetail(book: Book) {
    this.router.navigate(['/detail', book.id]);
  }

  applySearchFilter(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }


 

  // sortBooks() {
  //   this.isAscendingSort = !this.isAscendingSort;
  //   this.books.sort((item1: any, item2: any) => this.compare(item1, item2));
  // }

  // compare(item1: any, item2: any): number {
  //   let compValue = 0;
  //   compValue = item1.title.localeCompare(item2.title, 'en', {
  //     sensitivity: 'base'
  //   });
  //   if (!this.isAscendingSort) {
  //     compValue = compValue * -1;
  //   }
  //   return compValue;
  // }


}
