import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataPassService } from '../service/data-pass.service';
import { StackOFService } from '../service/stack-of.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

sessionStorage.setItem('email', 'shoaib@gmail.com');

@Component({
  selector: 'app-learning-obs',
  templateUrl: './learning-obs.component.html',
  styleUrls: ['./learning-obs.component.css'],
})
export class LearningObsComponent {
  obsTest$ = new Observable((observer) => {
    console.log('printed from obsssssssss');
  }).subscribe();

  stream = new Observable((observer) => {
    observer.next('hello');
    observer.next('world');
    observer.complete();
  });
  students: any;
  currentPage = 1;
  pageSize = 20;
  async getstudents() {
    this.students = await this.stackSvc.getStudents();
    console.log(this.students);
  }
  constructor(private stackSvc: StackOFService) {
    this.getstudents();

    const value = sessionStorage.getItem('email');
    this.stream.subscribe((data: any) => {
      console.log(data);
    });
    let source = of(1, 2, 3);
    const mapped = source.pipe(map((value): any => value * 2));

    mapped.subscribe((result) => console.log(result));
  }
}
