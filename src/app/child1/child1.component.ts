import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component {
  childMessage = 'coming from child1';

  outputtedMessage = 'kuch to output';
  @Output() opMessageEvent = new EventEmitter();

  sendMessage() {
    this.opMessageEvent.emit(this.outputtedMessage);
  }

}
