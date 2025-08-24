import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../../services/movieService';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private movieService: MovieService, private router: Router) {}

  searchTerm$ = new Subject<string>();

  ngOnInit() {
    this.searchTerm$
      .pipe(
        debounceTime(600),
        distinctUntilChanged(),
        switchMap((term) => this.movieService.searchMovies(term))
      )
      .subscribe({
        next: (res) => {
          console.log(res.results);
        },
        error: (err) => {
          console.error('Error searching movies:', err);
        },
      });
  }

  onSearch(term: string) {
    this.searchTerm$.next(term);
  }

  backToHome() {
    this.router.navigate(['/']);
  }
}
