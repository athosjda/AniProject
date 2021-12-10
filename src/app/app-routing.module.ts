import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './search/anime/anime.component';
import { EpisodesComponent } from './search/episodes/episodes.component';

const routes: Routes = [
  { path: 'search/anime', component: AnimeComponent },
  { path: 'search/episodes', component: EpisodesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
