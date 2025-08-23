import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Movie } from '../../../interfaces/Movies';

@Component({
  selector: 'app-movie-carousel',
  imports: [CarouselModule],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.css',
})
export class MovieCarouselComponent {
  @Input() movies: Movie[] = [];
  @Input() title: string = '';
  @Input() imageBaseUrl: string = '';

  public responsiveOptions: any[] = [
  {
    breakpoint: '1400px', // screens <= 1400px
    numVisible: 6,
    numScroll: 2
  },
  {
    breakpoint: '1200px', // screens <= 1200px
    numVisible: 5,
    numScroll: 2
  },
  {
    breakpoint: '992px', // screens <= 992px
    numVisible: 4,
    numScroll: 1
  },
  {
    breakpoint: '768px', // screens <= 768px
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '560px', // screens <= 560px
    numVisible: 2,
    numScroll: 1
  }
];
}
