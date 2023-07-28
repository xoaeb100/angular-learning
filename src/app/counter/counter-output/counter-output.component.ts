import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterDTO } from '../counterDTO';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  counter!: number;
  constructor(private store: Store<counterDTO>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((data: any) => {
      this.counter = data.counter;
    });
  }
}
