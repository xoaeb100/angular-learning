import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Child1Component } from './child1/child1.component';
import { LearningObsComponent } from './learning-obs/learning-obs.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoModule } from './todo/todo.module';
import { BasicRXJSComponent } from './basic-rxjs/basic-rxjs.component';
import { UiModule } from './ui/ui.module';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Child1Component,
    LearningObsComponent,
    BasicRXJSComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }),
    HttpClientModule,
    AppRoutingModule,
    TodoModule,
    UiModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
