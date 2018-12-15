import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RootObject } from './models/root-object';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }

  getAllCharacters(): Observable<RootObject> {
    return this.httpClient.get<RootObject>(environment.endpoint + 'character/').pipe(
      map((response: RootObject) => {
        if (response) {
          return response;
        }
        return new RootObject();
      })
    );
  }
}
