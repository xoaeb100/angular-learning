import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterDTO } from '../state/counter.state';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;

  constructor(private store: Store<counterDTO>) {}

  ngOnInit() {}

  add() {
    this.store.dispatch(customIncrement({ value: +this.value }));

    console.log(this.value);
  }
}
