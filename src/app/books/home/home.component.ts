import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectBooks } from '../store/books.selector';
import { invokeBookAPI } from '../store/books.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store) { }
  books$ = this.store.pipe(select(selectBooks));

  ngOnInit(): void {
    this.store.dispatch(invokeBookAPI());
  }

}
