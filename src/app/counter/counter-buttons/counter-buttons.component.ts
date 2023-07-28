import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { counterDTO } from '../counterDTO';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent {
  // USING   🦎NGRX HERE
  constructor(private store: Store<counterDTO>) {}

  //before using ngrx 👇
  // @Output() increment = new EventEmitter<void>();

  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();
  // 👆

  onIncrement() {
    this.store.dispatch(increment());
    //before using ngrx 👇
    // this.increment.emit();
  }
  onDecrement() {
    this.store.dispatch(decrement());

    //before using ngrx 👇
    // this.decrement.emit();
  }
  onReset() {
    this.store.dispatch(reset());
    //before using ngrx 👇
    // this.reset.emit();
  }
}
