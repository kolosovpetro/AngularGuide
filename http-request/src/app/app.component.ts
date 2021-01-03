import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {Movie} from './movie';
import {MoviesService} from './movies.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'http-request';

    // @ts-ignore
    movieId: number;

    // @ts-ignore
    fieldMovieId: number;

    // @ts-ignore
    user: User;

    // @ts-ignore
    movie: Movie;


    constructor(private movService: MoviesService) {
    }

    updateMovie(): void {

        this.movService.getMovie(this.movieId).subscribe((data: Movie) => {
            this.movie = data;
        });
    }

    // ngOnInit(): void {
    // this.http.get<User>('assets/user.json').subscribe((data: User) => this.user = data);
    // this.http.get<Movie>(this.url).subscribe((data: Movie) => this.movie = data,
    // (error) => console.log(error));
    // }
}
