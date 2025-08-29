import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeCounter, changeName } from '../state/counter.actions';
import { getChangeName } from '../state/counter.selector';

@Component({
  selector: 'app-custom-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent implements OnInit {
  counterValue!: number;
  channelName: string = '';

  constructor(private store: Store<{ counter: CounterState }>) { }
  ngOnInit(): void {
    this.store.select(getChangeName).subscribe(changeName => {
      this.channelName = changeName;
    })
  }

  setCounter() {
    this.store.dispatch(changeCounter({ count: this.counterValue }));
  }

  updateChannelName() {

    this.store.dispatch(changeName());

  }

}
