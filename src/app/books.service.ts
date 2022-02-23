import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}
  public Books(searchedBook: String) {
    let searched = searchedBook.split(' ').join('+');
    return this.httpClient.get('api' + '/search.json?q=' + searched);
  }

  public BookInfo(key: String) {
    return this.httpClient.get('api' + key + '.json');
  }
}
