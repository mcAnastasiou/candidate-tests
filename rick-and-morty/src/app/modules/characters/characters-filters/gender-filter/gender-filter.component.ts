import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { BaseFilter } from '../base-filter';

@Component({
  selector: 'rm-gender-filter',
  templateUrl: './gender-filter.component.html',
  styleUrls: ['./gender-filter.component.scss']
})
export class GenderFilterComponent extends BaseFilter implements OnInit, OnChanges {
  constructor() {
    super();
    this.dropdownValues = ['Female', 'Male', 'Genderless', 'uknown'];
  }

  ngOnInit() {
    super.onInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.onChanges(changes);
  }
}
