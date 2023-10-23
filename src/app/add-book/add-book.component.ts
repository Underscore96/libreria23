import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { BookServiceService } from "../book-service.service";
import { Book } from '../book';

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.scss"]
})
export class AddBookComponent implements OnInit {
  addForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      title: [""],
      author: [""],
      description: [""],
      imageUrl: ["https://img.freepik.com/premium-vector/pile-books-flat-style-isolated-white-background-stack-books-with-bookmarks_538002-2394.jpg"],

    });
  }

  addBook() {
    const newBook: Book = this.addForm.value;
    this.bookService.addBook(newBook).subscribe((addedBook: Book) => {
      this.router.navigate(['/display']);

      console.log("Author:", newBook.author);
      console.log("Title:", newBook.title);
     

    });
  }
}
