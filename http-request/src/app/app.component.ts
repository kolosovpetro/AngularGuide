import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'http-request';

    // @ts-ignore
    user: User;


    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get<User>('assets/user.json').subscribe((data: User) => this.user = data);
    }
}
