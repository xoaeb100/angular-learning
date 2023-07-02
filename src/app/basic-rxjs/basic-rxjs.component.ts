import { Component } from '@angular/core';
import { Observable, of, from, map, filter, tap } from 'rxjs';

@Component({
  selector: 'app-basic-rxjs',
  templateUrl: './basic-rxjs.component.html',
  styleUrls: ['./basic-rxjs.component.css'],
})
export class BasicRXJSComponent {
  // observable is like a youtuber, observer is a youtube video,
  //subscriber is obvio the user who subscribes to the observable

  observable$ = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
  });

  numArray = [1, 2, 3, 4, 5, 6, 9];
  // pipe operator combine multiple rxjs fn together (map and filter)

  //map() operator in RxJS transforms each emitted value of an observable into a new value
  //based on a specified transformation function, resulting in a new observable emitting the transformed values.

  observable2$ = from(this.numArray).pipe(map((val: any) => val ** 2));

  //The filter() operator in RxJS selectively emits values from an observable based on a provided condition,
  // creating a new observable that only contains the values that satisfy the condition.

  observable3$ = from(this.numArray).pipe(filter((val: any) => val % 2 == 0));

  //tap() operator in RxJS allows you to perform side effects or actions for each value emitted by an observable,
  // without modifying or transforming the values.
  //It is commonly used for debugging, logging, or triggering other operations based on the emitted values.

  observable4$ = from(this.numArray).pipe(
    filter((val: any) => val % 2 == 0),
    tap((x: any) => console.log(x))
  );

  constructor() {
    this.observable$.subscribe((data: any) => {
      console.log(data);
    });

    //of is just for loop for arrays
    of('hello', 'darkness', 'my', 'old', 'frind').subscribe({
      next: (value) => console.log(value),
    });

    //from is 'of' for iterables
    from(['hello', 'darkness', 'my', 'old', 'frnd']).subscribe({
      next: (value) => console.log(value),
    });

    this.observable2$.subscribe((value) => console.log(value));
    this.observable3$.subscribe((value) => console.log(value));
    this.observable4$.subscribe((value) => console.log(value));
  }
}
