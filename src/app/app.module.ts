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

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Child1Component,
    LearningObsComponent,
    BasicRXJSComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TodoModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
