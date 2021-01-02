import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  totalAngularPackages: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // Simple GET request with response type <any>
    this.http.get<any>('https://movies-rest-api-demo.herokuapp.com/movies').subscribe(data => {
      this.totalAngularPackages = data.total;
    });
  }
}
