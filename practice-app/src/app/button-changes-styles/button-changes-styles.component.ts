import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-changes-styles',
  templateUrl: './button-changes-styles.component.html',
  styleUrls: ['./button-changes-styles.component.css']
})
export class ButtonChangesStylesComponent {

  defaultStyle = 'default';
  modifiedStyle = 'changed';
  currentStyle = this.defaultStyle;
  isChanged = true;

  changeStyle(): void {
    this.isChanged = !this.isChanged;
    if (this.isChanged) {
      this.currentStyle = this.defaultStyle;
    } else {
      this.currentStyle = this.modifiedStyle;
    }
  }

}
