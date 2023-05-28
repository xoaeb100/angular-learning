import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningObsComponent } from './learning-obs.component';

describe('LearningObsComponent', () => {
  let component: LearningObsComponent;
  let fixture: ComponentFixture<LearningObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningObsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
