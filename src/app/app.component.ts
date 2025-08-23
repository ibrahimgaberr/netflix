import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationStart, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoaderComponent } from './components/shared/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'netflix';
  // Make the loader a appear
  public isLoading: boolean;

  constructor(private router: Router) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    // Show loading on route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      }
    });

    // Initial loading
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
