import { Component } from '@angular/core';

import { AnimeService } from './services/anime.service';
import { Anime } from './models/anime'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'aniProject';
  
  anime = {} as Anime;
  animes!: Anime[];

  id!: number;

  constructor(){
  }

  ngOnInit(): void{}
}
