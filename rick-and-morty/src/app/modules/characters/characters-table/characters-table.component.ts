import { Component, OnInit, Input } from '@angular/core';
import { CharacterModalComponent } from '../character-modal/character-modal.component';
import { CharactersService } from '../services/characters.service';
import { Result } from '../models/result';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Episode } from '../models/episode';
import { Info } from '../models/info';
import { RootObject } from '../models/root-object';

@Component({
  selector: 'rm-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.scss']
})
export class CharactersTableComponent implements OnInit {
  @Input()info: Info;
  @Input()results: Result[];
  rootObject: RootObject;

  constructor(private charactersService: CharactersService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  onPrevClicked() {
    this.goToPage(this.info.prev);
  }

  onNextClicked() {
    this.goToPage(this.info.next);
  }

  getNumberOfEpisodes(character: Result) {
    return character.episode ? character.episode.length : 0;
  }

  onCharacterClicked(character: Result) {
    this.charactersService.getEpisodesOfCharacter(character).subscribe((result: Episode[]) => {
      const modalRef = this.modalService.open(CharacterModalComponent);
      modalRef.componentInstance.character = character;
      modalRef.componentInstance.episodes = result;
    }, (error) => {
      console.log(`Error on getting episodes from character ${character.id}`);
    });
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
