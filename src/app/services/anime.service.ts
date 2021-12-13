import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

import { Anime } from '../models/anime';
import { Comment } from '../models/comment';
import { Episode } from '../models/episode';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  url = 'https://api.jikan.moe/v3/anime';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getAnimeById(id: number): Observable<Anime>{
    return this.httpClient.get<Anime>(this.url+'/'+id).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getEpisodeById(id: number): Observable<Episode>{
    return this.httpClient.get<Episode>(this.url+'/'+id+'/episodes').pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getComments(id: number): Observable<Comment>{
    return this.httpClient.get<Comment>(this.url+'/'+id+'/reviews').pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  
}
