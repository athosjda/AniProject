import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manga } from 'src/app/models/manga';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {

  id!: number;
  manga!: Manga;

  constructor(
    private activateRoute: ActivatedRoute,
    private mangaService: MangaService
    ) { }

  ngOnInit(): void {
    this.activateRoute.queryParamMap;
  }

  getMangaById(id: number): void{
    this.mangaService.getMangaById(id).subscribe((manga: Manga) => {
      this.manga = manga;
    })
  }

}
