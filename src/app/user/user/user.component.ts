import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
   user;

  isMarkedFirstTime = false;
  isMarkedSecondTime = false;

  onClick() {
    if (this.isMarkedFirstTime === true) {
      this.isMarkedSecondTime = true;
      this.isMarkedFirstTime = false;
    }
   this.isMarkedFirstTime = true;
    if (this.isMarkedSecondTime === true ) {
     this.isMarkedFirstTime = false;
      this.isMarkedSecondTime = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
