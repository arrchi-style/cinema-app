import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../common/protocols';
import { Dedpul } from '../../../common/data-movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [Movie]
})
export class SliderComponent implements OnInit {

  movie: Movie;

  constructor() {
     this.movie = Dedpul;
   }

  ngOnInit() {
    
  }

}
