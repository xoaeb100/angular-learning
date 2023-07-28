import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { LearningObsComponent } from './learning-obs/learning-obs.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { BasicRXJSComponent } from './basic-rxjs/basic-rxjs.component';
import { CounterComponent } from './counter/counter/counter.component';

const routes: Routes = [
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },
  // Learning observables
  { path: 'obs', component: LearningObsComponent },
  { path: 'todo', component: AddTodoComponent },
  // Learning RXjs
  { path: 'basic', component: BasicRXJSComponent },
  // Learning NGRX
  { path: 'ngrx', component: CounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
