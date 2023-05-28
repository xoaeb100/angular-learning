import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../service/data-pass.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  constructor(private dataSvc: DataPassService, private router: Router) {}
  myData: any[] = [];
  newMessage() {
    this.dataSvc.changeMessage('Hello from parent component');
    this.router.navigate(['/comp2']);
  }
  ngOnInit(): void {
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
  onButtonClick(item: any) {
    console.log(item);

    console.log('Button clicked!');
  }
}
