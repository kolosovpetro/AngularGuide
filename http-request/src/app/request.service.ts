import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movies';

@Injectable()
export class RequestService {
  private endpoint: string = 'https://movies-rest-api-demo.herokuapp.com/api/movies/1';
  private movie : Movie;
  constructor(private httpClient: HttpClient) {}

  getMovie(): Movie {
    return this.httpClient.get<Movie>(this.endpoint).subscribe((data: Movie) => {
      
    });
  }
}
