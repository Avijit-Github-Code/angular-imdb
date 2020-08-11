import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable(
  {
    providedIn: 'root'
  }
)
export class ApiService {
  API_KEY = '68e82445c8842ba8616d0f6bf0e97a41';
  genre_Id;
  movie_Id;
  private movie = {};
  constructor(private http : HttpClient) { }

  public getGenres(){
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.API_KEY}`);
  }

  public getMovies(){
    console.log(this.genre_Id);
    return this.http.get(`https://api.themoviedb.org/3/genre/${this.genre_Id}/movies?api_key=${this.API_KEY}`);
  }

  public getMovieDetails(){
    console.log(this.movie_Id);
    return this.http.get(`https://api.themoviedb.org/3/movie/${this.movie_Id}?api_key=${this.API_KEY}`);
  }

  setMovie(data){
      this.movie = data;
  }

  getMovie(){
    return this.movie;
  }

}