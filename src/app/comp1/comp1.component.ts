import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DataPassService } from '../service/data-pass.service';
import { Router, RouterModule } from '@angular/router';
import { Child1Component } from '../child1/child1.component';
import { LocalStorageToken } from '../localstorage.token';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  constructor(
    private dataSvc: DataPassService,
    private router: Router,
    @Inject(LocalStorageToken) private localStorage: any
  ) {}
  myData: any[] = [];
  messagee: any;
  newMessage() {
    this.dataSvc.changeMessage('Hello from parent component');
    this.router.navigate(['/comp2']);
  }

  @ViewChild(Child1Component) childcomp: any;
  ngOnInit(): void {
    this.localStorage.setItem('name', 'shoaib');

    this.myData = [
      {
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
      {
        name: 'Jane Doe',
        email: 'janedoe@example.com',
      },
    ];
  }
  recievedMsg(event: any) {
    console.log(event);
    this.messagee = event;
  }
  ngAfterViewInit(): void {
    console.log('my child', this.childcomp.childMessage);
  }
  onButtonClick(item: any) {
    console.log(item);

    console.log('Button clicked!');
  }
}
