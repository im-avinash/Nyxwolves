import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}
  public Books(searchedBook: String) {
    let searched = searchedBook.split(' ').join('+');
    return this.httpClient.get(environment.apiUrl + '/search.json?q=' + searched);
  }

  public BookInfo(key: String) {
    return this.httpClient.get(environment.apiUrl + key + '.json');
  }
}
