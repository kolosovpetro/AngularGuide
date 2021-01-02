import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {

  currentValue = 0;

  increment(): void {
    this.currentValue++;
  }

  decrement(): void {
    if (this.currentValue <= 0) {
      return;
    }

    this.currentValue--;
  }

}
