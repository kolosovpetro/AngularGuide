import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from './movie';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    private url = 'https://movies-rest-api-demo.herokuapp.com/api/movies/';

    constructor(private httpClient: HttpClient) {
    }

    getMovie(id: number): Observable<Movie> {
        return this.httpClient.get<Movie>(this.url + id);
    }
}
