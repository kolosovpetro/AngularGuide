import {Component, OnInit} from '@angular/core';
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
    movie: Movie;

    // @ts-ignore
    movies: Movie[];


    constructor(private movService: MoviesService) {
    }

    updateMovie(): void {
        this.movService.getMovie(this.movieId).subscribe((data: Movie) => {
            this.movie = data;
        });
    }

    displayMovies(): void {
        this.movService.getAllMovies().subscribe((data: Movie[]) => {
            this.movies = data;
        });
    }

    // ngOnInit(): void {
    // this.http.get<User>('assets/user.json').subscribe((data: User) => this.user = data);
    // this.http.get<Movie>(this.url).subscribe((data: Movie) => this.movie = data,
    // (error) => console.log(error));
    // }
}
