import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-read-from-field',
  templateUrl: './read-from-field.component.html',
  styleUrls: ['./read-from-field.component.css']
})
export class ReadFromFieldComponent {

  firstName = '';
  lastName = '';

  divFirstname = '';
  divLastName = '';

  onClick(): void {
    this.divFirstname = this.firstName;
    this.divLastName = this.lastName;
  }

}
