import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CharactersService } from './characters.service';
import { RootObject } from '../models/root-object';
import { Observable } from 'rxjs';
import { UrlUtil } from 'src/app/utils/url-util';

@Injectable({
  providedIn: 'root'
})
export class CharactersResolverService implements Resolve<RootObject> {
  constructor(private charactersService: CharactersService) { }

  resolve(): Observable<RootObject> {
    const queryParams = UrlUtil.queryParamsToObject(window.location.href);

    return this.charactersService.getAllCharacters(queryParams);
  }
}
