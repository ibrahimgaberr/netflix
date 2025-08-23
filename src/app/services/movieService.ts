import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MovieResponse } from '../interfaces/Movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  // Get trending movies
  getTrendingMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `${environment.apiBaseUrl}/trending/movie/week?api_key=${environment.apiKey}`
    );
  }

  // Get popular movies
  getPopularMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `${environment.apiBaseUrl}/movie/popular?api_key=${environment.apiKey}&language=en-US&page=1`
    );
  }

  // Get top rated movies
  getTopRatedMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `${environment.apiBaseUrl}/movie/top_rated?api_key=${environment.apiKey}&language=en-US&page=1`
    );
  }

  // Get upcoming movies
  getUpcomingMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `${environment.apiBaseUrl}/movie/upcoming?api_key=${environment.apiKey}&language=en-US&page=1`
    );
  }

  // To Open the movie video
  getMovieVideos(movieId: number) {
    const url = `${environment.apiBaseUrl}/movie/${movieId}/videos?api_key=${environment.apiKey}&language=en-US`;
    return this.http.get<{
      id: number;
      results: Array<{
        id: string;
        key: string; // YouTube video id
        name: string;
        site: 'YouTube' | 'Vimeo' | string;
        size: number;
        type: 'Trailer' | 'Teaser' | 'Clip' | string;
        official: boolean;
        published_at: string;
      }>;
    }>(url);
  }

  // Search movies
  searchMovies(query: string): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/search/movie`, {
      params: {
        api_key: environment.apiKey,
        query: query,
      },
    });
  }
}
