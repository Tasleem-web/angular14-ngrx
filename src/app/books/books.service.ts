import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from './store/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get<Book[]>("http://localhost:3000/books");
  }
}
