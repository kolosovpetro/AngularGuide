import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent {

  redBackground = 'default-color';
  greenBackground = 'changed-color';
  isDefault = true;
  currentStyle = this.redBackground;

  changeStyle(): void {
    this.isDefault = !this.isDefault;
    if (this.isDefault) {
      this.currentStyle = this.redBackground;
    } else {
      this.currentStyle = this.greenBackground;
    }
  }

}
