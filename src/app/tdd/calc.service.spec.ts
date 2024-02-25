/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalcService } from './calc.service';
import { SharedService } from './shared.service';

describe('Service: Calc', () => {
  let shared:any= SharedService;
  let calc:any= CalcService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcService],
    });
     shared= TestBed.inject(SharedService);
     calc= TestBed.inject(CalcService);

  });

  it('should multiply 2 numbers and return the result', () => {
   
    const result = calc.multiply(10, 5);
    expect(result).toBe(50);
  });

  it('should add 2 numbers and return the result', () => {
  
    const result = calc.addition(10, 5);
    expect(result).toBe(15);
  });

  // 🕵️🕵️🕵️ Use spyOn to make sure the fn is called without actually calling the OG fn
  it('should call sharedservice', () => {
    const shared = new SharedService();
    spyOn(shared, 'mysharedFn');
    const service = new CalcService(shared);
    const result = service.multiply(10, 5);
    expect(shared.mysharedFn).toHaveBeenCalled();
  });
  //using jasmine.createSpyObj TO PREVENT HTTP CALL i.e PREVENTING CONSTRUCTOR () TO BE EXECUTED
  it('should call sharedservice', () => {
    const shared = jasmine.createSpyObj('sharedService', ['mysharedFn']);
    const service = new CalcService(shared);
    const result = service.multiply(10, 5);
    expect(result).toBe(50);
  });

  // Run 'fit' instead of 'it' to run only one suite same with 'fdescribe' for multiple spec files
  // Run 'xit' instead of 'it' to ignore this  suite same with 'xdescribe' for multiple spec files
  
});
