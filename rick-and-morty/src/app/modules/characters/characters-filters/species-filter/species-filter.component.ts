import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BaseFilter } from '../base-filter';

@Component({
  selector: 'rm-species-filter',
  templateUrl: './species-filter.component.html',
  styleUrls: ['./species-filter.component.scss']
})
export class SpeciesFilterComponent extends BaseFilter implements OnInit, OnChanges {
  constructor() {
    super();
    this.dropdownValues = [
      'Human',
      'Alien',
      'Humanoid',
      'uknown',
      'Poopybutthole',
      'Mytholog',
      'Animal',
      'Vampire',
      'Robot',
      'Cronenberg',
      'Disease',
      'Parasite'
    ];
  }

  ngOnInit() {
    super.onInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.onChanges(changes);
  }
}
