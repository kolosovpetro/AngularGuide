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
  template: `
    <div class="page-header">
      <h1> Список покупок </h1>
    </div>
    <div class="panel">
      <div class="form-inline">
        <div class="form-group">
          <div class="col-md-8">
            <input class="form-control" [(ngModel)]="text" placeholder="Название"/>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-6">
            <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена"/>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-offset-2 col-md-8">
            <button class="btn btn-default" (click)="addItem(text, price)">Добавить</button>
          </div>
        </div>
      </div>
      <table class="table table-striped">
        <thead>
        <tr>
          <th>Предмет</th>
          <th>Цена</th>
          <th>Куплено</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let item of items">
          <td>{{item.purchase}}</td>
          <td>{{item.price}}</td>
          <td><input type="checkbox" [(ngModel)]="item.done"/></td>
        </tr>
        </tbody>
      </table>
    </div>`
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
