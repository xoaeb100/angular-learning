import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataPassService } from '../service/data-pass.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component {
  message!: string;
  @Input() data: any;

  @Output() buttonClick = new EventEmitter();

  onButtonClick(item: any) {
    this.buttonClick.emit(item);
  }
  constructor(private dataSvc: DataPassService) {}

  ngOnInit() {
    this.dataSvc.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
}
