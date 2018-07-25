import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [MoviesService]
})
export class MyMovieComponentComponent implements OnInit {
  movie : Object;
  movieId : Number;
  constructor(private TheMovies : MoviesService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']));
    this.movie = this.TheMovies.getMovie(this.movieId);
  }

}
