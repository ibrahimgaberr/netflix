import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WatchVideoComponent } from './components/watchvideo/watchvideo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'watch/:id', component: WatchVideoComponent },
  {path: '**', component: NotFoundComponent} // wildcard route for a 404 page
];
