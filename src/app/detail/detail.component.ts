import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})


export class DetailComponent implements OnInit {

    book: Book | null = null;
  
    constructor(private route: ActivatedRoute, private bookService: BookServiceService) {}
  
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.bookService.getBookById(id).subscribe((data: Book) => {
          this.book = data;
        });
      }
    }
  

}
