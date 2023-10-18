import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { BookServiceService } from "../book-service.service";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"]
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
      imgUrl: [""],
      title: [""],
      description: [""],
    });
  }

  addBook() {
    this.bookService.addBook(this.addForm.value);
    this.router.navigate(['/display']);
  }
}

