import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCounter } from '../state/counter.selector';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counter: number = 0;

  constructor(private store: Store<{ counter: { counter: number } }>) { }

  ngOnInit(): void {
    this.store.select(getCounter).subscribe(counter => {
      console.log('CounterOutputComponent initialized');

      this.counter = counter;
    })
  }

}
