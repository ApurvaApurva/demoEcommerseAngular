import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/model/Book';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  @Input()
  book!: Book;

  @Output()
  DeletedbookEvent = new EventEmitter();


  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit() {
  }

  deleteBook() {
    this.httpClientService.deleteBook(this.book.id).subscribe(
      (book) => {
        this.DeletedbookEvent.emit();
        window.location.reload();
       // this.router.navigate(['admin', 'cloths']);
        this.router.navigate(['admin', 'books']);
        }
        
    );
  }

  editBook() {
    this.router.navigate(['admin', 'books'], { queryParams: { action: 'edit', id: this.book.id } });
  }

}
