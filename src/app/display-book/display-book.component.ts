import { BookServiceService } from "../book-service.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-display-book",
  templateUrl: "./display-book.component.html",
  styleUrls: ["./display-book.component.css"]
})
export class DisplayBookComponent implements OnInit {
  books = this.bookService.books;
  constructor(private bookService: BookServiceService) {}
  
  
  
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
