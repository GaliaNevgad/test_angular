import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users = [];
  searchStr = '';
  constructor (private usersService: UsersService ) {
  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
