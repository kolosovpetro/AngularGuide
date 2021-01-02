import {Component} from '@angular/core';

@Component(
  {
    selector: 'app-child-comp',
    template: `
      <div>
        <input type="text" value="{{currentValue}}" readonly>
        <br>
        <input type="button" (click)="increment()" value="Increment">
        <br>
        <input type="button" (click)="decrement()" value="Decrement">
      </div>`
  }
)

export class ChildComponent {
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
