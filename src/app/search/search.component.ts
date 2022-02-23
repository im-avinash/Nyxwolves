import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  search: String = '';
  books: Array<Array<String>> = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {}
  searchBooks(search: String): void {
    this.booksService.Books(search).subscribe((data: any) => {
      data.docs.map((element: any) => {
        this.books.push([element.title, element.key]);
      });
      console.log(this.books);
    });
  }
}
