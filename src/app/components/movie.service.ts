import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from '../common/protocols';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MovieService {

  private _url = '/src/app/assets/data-movie.json';

  constructor(private http: HttpClient) {}
  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this._url);
  }
}

