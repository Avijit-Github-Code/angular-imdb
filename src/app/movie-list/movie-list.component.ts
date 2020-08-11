import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  movies;
  genres;
  genreName;
  movieId;
  sample;
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getGenres().subscribe((data)=>{
      this.genres = data['genres'];
    });
  }
  getMovies(genreName, genreId){
    this.genreName = genreName;
    this.apiService.genre_Id = genreId;
    this.apiService.getMovies().subscribe((data)=>{
      this.movies = data['results'];
    });
  }

  getMovieDetails(movieId){
    this.apiService.movie_Id = movieId;
    this.apiService.getMovieDetails().subscribe((data)=>{
      this.apiService.setMovie(data);
    });
  }

}