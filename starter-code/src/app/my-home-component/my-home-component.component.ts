import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [MoviesService]
})
export class MyHomeComponentComponent implements OnInit {
  movies : Array<Object> = [];
  constructor( private TheMovies : MoviesService) { }
  
  ngOnInit() {
    this.movies = this.TheMovies.getMovies();
  }

}
