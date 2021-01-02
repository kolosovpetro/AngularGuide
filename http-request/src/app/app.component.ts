import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Movie} from './movie';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'http-request';

    // @ts-ignore
    user: User;

    // @ts-ignore
    movie: Movie;

    private url = 'https://movies-rest-api-demo.herokuapp.com/api/movies/1';


    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        // this.http.get<User>('assets/user.json').subscribe((data: User) => this.user = data);
        this.http.get<Movie>('assets/user.json').subscribe((data: Movie) => this.movie = data);
    }
}
