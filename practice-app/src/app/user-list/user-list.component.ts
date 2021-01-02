import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent {

  users: User[] = [];

  displayUsers(): void {
    this.users = [
      new User('Petro', 'Kolosov', 'kolosov@mail.ru'),
      new User('Ivanov', 'Ivan', 'kolosov@mail.ru'),
      new User('Sergeev', 'Sergiy', 'kolosov@mail.ru'),
    ];
  }
}

export class User {
  firstName: string;
  lastName: string;
  email: string;


  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

