import { Component, Input, OnInit, SecurityContext, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeValue } from '@angular/platform-browser';
import { Anime } from 'src/app/models/anime';

@Component({
  selector: 'app-anime-result',
  templateUrl: './anime-result.component.html',
  styleUrls: ['./anime-result.component.css']
})
export class AnimeResultComponent implements OnInit {
  
  @Input() anime!: Anime;
  private genres: Array<string> = [];
  re!: RegExp;

  constructor(private _sanitizer: DomSanitizer) { 
  }

  ngOnInit(): void {
  }

  cleanURL(url: string): SafeResourceUrl{
    this.re = RegExp(/[?]/);
    return this._sanitizer.bypassSecurityTrustResourceUrl(url.substring(0, url.search(this.re)));
  }

  mergeGenres(): Array<string> {
    this.genres = [];
    if(this.anime.genres != undefined){
      this.anime.genres.forEach(ele => {
        this.genres.push(ele.name)
      });
    }
    return this.genres;
  }

  getDate(date: string): number{
    return new Date(date).getFullYear();
  }

  validate(value: any): boolean{
    return value != undefined ? true : false;
  }
}
