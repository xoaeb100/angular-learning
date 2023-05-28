import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-learning-obs',
  templateUrl: './learning-obs.component.html',
  styleUrls: ['./learning-obs.component.css'],
})
export class LearningObsComponent {
  obsTest$ = new Observable((observer) => {
    console.log('printed from obsssssssss');
  }).subscribe();
}
