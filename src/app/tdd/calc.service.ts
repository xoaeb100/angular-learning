import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class CalcService {
  constructor(private sharedSvc: SharedService) {}

  multiply(a: number, b: number) {
    this.sharedSvc.mysharedFn();
    return a * b;
  }

  addition(a: number, b: number) {
    this.sharedSvc.mysharedFn();
    return a + b;
  }
}
