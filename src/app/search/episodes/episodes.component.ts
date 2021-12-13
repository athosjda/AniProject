import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  episode = {} as Episode;
  @Input() id!: number;

  constructor(
    private animeService: AnimeService
    ) {
  }

  ngOnInit(): void {
  }

  getEpisodeById(): void{
    this.animeService.getEpisodeById(this.id).subscribe((episode: Episode) =>{
      episode.episodes.map(function(obj){
        let date = new Date(obj.aired);
        obj.aired = String(date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear());
      })
      this.episode = episode;
    })
  }

  showEpisodes(): void{
    if(this.id > 0){
      this.getEpisodeById();
    }
  }
}
