import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  url = 'https://api.jikan.moe/v3/anime';

  constructor() { }
}
