import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService } from '../../services/movieService';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-watchvideo',
  imports: [CommonModule],
  templateUrl: './watchvideo.component.html',
  styleUrl: './watchvideo.component.css'
})
export class WatchVideoComponent {
  movieId!: number;
  trailerUrl: SafeResourceUrl | null = null;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));

    this.movieService.getMovieVideos(this.movieId).subscribe((res) => {
      if (res.results && res.results.length > 0) {
        // نختار أول تريلر رسمي
        const trailer = res.results.find(v => v.type === 'Trailer' && v.site === 'YouTube')
                        || res.results[0];

        if (trailer) {
          this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=1`
          );
        }
      }
    });
  }

  backToHome() {
    this.router.navigate(['/']);
  }
}
