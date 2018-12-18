import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { BaseFilter } from '../base-filter';

@Component({
  selector: 'rm-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.scss']
})
export class StatusFilterComponent extends BaseFilter implements OnInit, OnChanges {
  constructor() {
    super();
    this.dropdownValues = ['Alive', 'Dead', 'uknown'];
   }

  ngOnInit() {
    super.onInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.onChanges(changes);
  }
}
