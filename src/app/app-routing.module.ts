import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './search/anime/anime.component';
import { MangaComponent } from './search/manga/manga.component';

const routes: Routes = [
  { path: 'search/anime', component: AnimeComponent },
  { path: 'search/manga', component: MangaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
