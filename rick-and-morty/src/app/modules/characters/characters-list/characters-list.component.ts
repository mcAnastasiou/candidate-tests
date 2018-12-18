import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { RootObject } from '../models/root-object';
import { Result } from '../models/result';
import { Info } from '../models/info';
import { ActivatedRoute } from '@angular/router';
import { Filters } from '../models/filters';
import { UrlUtil } from 'src/app/utils/url-util';

@Component({
  selector: 'rm-characters-list',
  templateUrl: './characters-list.component.html'
})
export class CharactersListComponent implements OnInit {
  info: Info;
  results: Result[];

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { rootObject: RootObject }) => {
        this.info = data.rootObject.info;
        this.results = data.rootObject.results;
      });
  }

  onApplyClicked(filters: Filters) {
    this.charactersService.getAllCharacters(filters).subscribe((rootObject: RootObject) => {
      this.info = rootObject.info;
      this.results = rootObject.results;
    });
  }

  onResetClicked() {
    this.charactersService.getAllCharacters().subscribe((rootObject: RootObject) => {
      this.info = rootObject.info;
      this.results = rootObject.results;
    });
  }
}
