import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../interfaces/Movies';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  // Input property to receive movie details
  @Input() bannerDetails: Movie | null = null;
  @Input() show: boolean = false;

  public imageBaseUrl: string = 'https://image.tmdb.org/t/p/original';

  @Output() close = new EventEmitter<void>();

  constructor(private router: Router) {}

  public playMovie(id: number) {
    this.router.navigate(['/watch', id]);
  }

  public onClose() {
    this.close.emit();
  }
}
