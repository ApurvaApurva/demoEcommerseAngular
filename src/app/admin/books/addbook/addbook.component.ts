import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  @Input()
  book!: Book;
  
  @Output()
  bookAddedEvent = new EventEmitter();
  
  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addBook() {
    if (this.book.id == null) {
    this.httpClientService.createBook(this.book).subscribe(
      (book) => {
        this.bookAddedEvent.emit();
        this.router.navigate(['admin', 'books']);
      }
    );
    }
    else{
      this.httpClientService.updateBook(this.book).subscribe(
        (book) => {
          this.bookAddedEvent.emit();
          this.router.navigate(['admin', 'books']);
        }
      );
    }
  }

  
}
