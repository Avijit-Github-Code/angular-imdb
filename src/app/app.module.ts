import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import {ScrollingModule} from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ApiService } from './api.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,
      RouterModule.forRoot([
        {path: '', component: MovieListComponent},
        {path: 'details/:movieId', component: MovieDetailsComponent}
      ]) ],
  declarations: [ AppComponent, MovieListComponent, MovieDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApiService]
})
export class AppModule { }
