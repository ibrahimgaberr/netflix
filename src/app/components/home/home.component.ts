import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movieService';
import { Movie, MovieResponse } from '../../interfaces/Movies';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { MovieCarouselComponent } from '../shared/movie-carousel/movie-carousel.component';
import { MovieDetailsComponent } from '../shared/movie-details/movie-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MovieCarouselComponent, MovieDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  // to handle the image base URL
  public imageBaseUrl: string = environment.imageBaseUrl;
  // to handle the banner movie
  public bannerMovie: Movie | null = null;
  // to handle the list of movies
  public allPopularMovies: Movie[] = [];

  public allTrendingMovies: Movie[] = [];
  public allToRatedMovies: Movie[] = [];
  public allUpComing: Movie[] = [];
  // to handle the apperance of the movie details dialog
  public show: boolean = false;

  constructor(private movieService: MovieService, private router:Router) {}

  private getAllPopularMovies() {
    this.movieService.getPopularMovies().subscribe({
      next: (res) => {
        this.bannerMovie = res.results[0];
        this.allPopularMovies = res.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  private getAllTrendingMovies() {
    this.movieService.getTrendingMovies().subscribe({
      next: (res) => {
        this.allTrendingMovies = res.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  private getAllTopRatedMovies() {
    this.movieService.getTopRatedMovies().subscribe({
      next: (res) => {
        this.allToRatedMovies = res.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  private getAllUpComing() {
    this.movieService.getUpcomingMovies().subscribe({
      next: (res) => {
        this.allUpComing = res.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnInit(): void {
    this.getAllPopularMovies();
    this.getAllTrendingMovies();
    this.getAllTopRatedMovies();
    this.getAllUpComing();
  }

  playMovie(id: number) {
    this.router.navigate(['/watch', id]);
  }

  public showDetails() {
    this.show = true;
  }

}
