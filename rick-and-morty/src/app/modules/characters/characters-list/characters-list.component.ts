import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { RootObject } from '../models/root-object';
import { Result } from '../models/result';
import { Info } from '../models/info';

@Component({
  selector: 'rm-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  private rootObject: RootObject;
  info: Info;
  results: Result[];

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getAllCharacters().subscribe((rootObject: RootObject) => {
      this.rootObject = rootObject;
      this.info = rootObject.info;
      this.results = rootObject.results;
    }, (error) => {
      console.log('Error on getting characters');
    });
  }

  getNumberOfEpisodes(character: Result) {
    return character.episode ? character.episode.length : 0;
  }

  onPrevClicked() {
    this.goToPage(this.info.prev);
  }

  onNextClicked() {
    this.goToPage(this.info.next);
  }

  private goToPage(page: string) {
    this.charactersService.getPageCharacters(page).subscribe((rootObject: RootObject) => {
      this.rootObject = rootObject;
      this.info = rootObject.info;
      this.results = rootObject.results;
    }, (error) => {
      console.log(`Error on getting characters from page ${page}`);
    });
  }
}
