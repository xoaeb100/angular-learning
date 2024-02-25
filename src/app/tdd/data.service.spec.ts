/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataService } from './data.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing/';
describe('Service: Data', () => {
  let service: DataService;
  let testingController: HttpTestingController ;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [DataService]
    });
    service= TestBed.inject(DataService)
    testingController= TestBed.inject(HttpTestingController)
  });

  it('should ', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
