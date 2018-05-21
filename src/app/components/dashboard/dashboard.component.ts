import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MovieService]
})
export class DashboardComponent implements OnInit {

  public movies = [];

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this._movieService.getMovies()
    .subscribe(data => this.movies = data);
  }

}
