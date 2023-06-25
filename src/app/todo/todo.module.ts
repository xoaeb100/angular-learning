import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';

import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [AddTodoComponent],
  imports: [CommonModule,UiModule, BrowserAnimationsModule],
})
export class TodoModule {}
