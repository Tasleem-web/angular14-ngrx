import { Component, OnInit } from '@angular/core';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CounterButtonsComponent } from '../counter-buttons/counter-buttons.component';
import { CommonModule } from '@angular/common';
import { CustomCounterComponent } from '../custom-counter/custom-counter.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, CounterOutputComponent, CounterButtonsComponent, CustomCounterComponent],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counter: number = 0;

  onIncrement() {
    this.counter++;
  }

  onDecrement() {
    this.counter--;

  }

  onReset() {
    this.counter = 0;
  }

}
