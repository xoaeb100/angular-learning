import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRXJSComponent } from './basic-rxjs.component';

describe('BasicRXJSComponent', () => {
  let component: BasicRXJSComponent;
  let fixture: ComponentFixture<BasicRXJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicRXJSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicRXJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
