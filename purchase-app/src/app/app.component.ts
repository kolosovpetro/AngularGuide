import {Component} from '@angular/core';

class Item {
  purchase: string;
  done: boolean;
  price: number;


  constructor(purchase: string, price: number) {
    this.purchase = purchase;
    this.done = false;
    this.price = price;
  }
}

@Component({
  selector: 'app-root',
  styleUrls: [`./app.component.css`],
  templateUrl: `app.component.html`
})

export class AppComponent {
  title = 'purchase-app';
  text: string = 'text';
  price: number = 0;


  items: Item[] = [
    {purchase: 'Bread', done: false, price: 19.5},
    {purchase: 'Oil', done: false, price: 60.0},
    {purchase: 'Potato', done: false, price: 22.6},
    {purchase: 'Cheese', done: true, price: 25.7}
  ];

  addItem(title: string, price: number): void {
    if (title == null || title.trim() == '' || price == null || price <= 0) {
      return;
    }

    this.items.push(new Item(title, price));
  }
}
