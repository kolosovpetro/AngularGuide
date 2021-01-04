import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from './movie';
import {Observable} from 'rxjs';
import {CreateMovieDto} from './models/create-movie-dto';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    private url = 'https://cqrs-movies-api.herokuapp.com/api/movies/';

    constructor(private httpClient: HttpClient) {
    }

    getMovie(id: number): Observable<Movie> {
        return this.httpClient.get<Movie>(this.url + id);
    }

    getAllMovies(): Observable<Movie[]> {
        return this.httpClient.get<Movie[]>(this.url);
    }

    postNewMovie(model: CreateMovieDto): Observable<any> {
        return this.httpClient.post<any>(this.url, model);
    }

}
