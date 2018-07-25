import { Injectable } from '@angular/core';
import {sampleMovies} from '../../sample-movies'
import { ActivatedRoute } from '@angular/router';

interface Movie {
  id: number,
  title: string,
  poster: string,
  synopsis: string,
  genres: Array<string>,
  year: number,
  director: string,
  actors: Array<string>,
  hours?: Array<string>,
  room?: number
}

@Injectable()
export class MoviesService{

  movies : Array<Movie> = sampleMovies;
   constructor(public route:ActivatedRoute) { }
   getMovies() {
     return this.movies;
   }
   getMovie(id){
     let movie;
    this.movies.forEach( el => {
      if(el.id == id){
        movie = el;
      }
    })
     return movie;
   }
}

