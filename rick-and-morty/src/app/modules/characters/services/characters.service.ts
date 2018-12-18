import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RootObject } from '../models/root-object';
import { map} from 'rxjs/operators';
import { Episode } from '../models/episode';
import { Result } from '../models/result';
import { UrlUtil } from 'src/app/utils/url-util';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }

  getAllCharacters(queryParams?: {gender, status, species}): Observable<RootObject> {
    return this.httpClient.get<RootObject>(environment.endpoint + 'character' + UrlUtil.queryParamsToString(queryParams)).pipe(
      map((response: RootObject) => {
        if (response) {
          return response;
        }
        return new RootObject();
      })
    );
  }

  getPageCharacters(page: string):  Observable<RootObject> {
    return this.httpClient.get<RootObject>(page).pipe(
      map((response: RootObject) => {
        if (response) {
          return response;
        }
        return new RootObject();
      })
    );
  }

  getEpisodesOfCharacter(character: Result): Observable<Episode[]> {
    const episodeGetRequests = character.episode.map((episodeUrl: string) => {
      return this.httpClient.get(episodeUrl).pipe(map(result => <Episode>result));
    });

    return forkJoin(episodeGetRequests);
  }
}
