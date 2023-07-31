import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterDTO } from '../state/counter.state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter!: number;

  // use subsription
  counterSubs!: Subscription;

  constructor(private store: Store<counterDTO>) {}

  ngOnInit(): void {
    this.counterSubs = this.store.select('counter').subscribe((data: any) => {
      this.counter = data.counter;
    });
  }
  ngOnDestroy(): void {
    if (this.counterSubs) {
      this.counterSubs.unsubscribe();
    }
  }
}
