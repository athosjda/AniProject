import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/models/anime';
import { AnimeService } from 'src/app/services/anime.service';
import { EpisodesComponent } from '../episodes/episodes.component';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  @ViewChild(EpisodesComponent) episodesComponent!: EpisodesComponent;

  anime = {} as Anime;
  id!: number;
  activate: boolean;

  constructor(
      private activateRoute: ActivatedRoute,
      private animeService: AnimeService
      ){
    this.activate = false;
  }

  ngOnInit(): void {
    this.activateRoute.queryParamMap;
  }

  getAnimeById(): void{
    this.animeService.getAnimeById(this.id).subscribe((anime: Anime) => {
      this.anime = anime;
    });
  }

  showAnime(): void{
    if(this.id > 0){
      this.getAnimeById();
      this.activate = true;
      this.episodesComponent.showEpisodes();
    }
  }
}
