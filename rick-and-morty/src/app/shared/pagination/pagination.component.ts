import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Info } from 'src/app/modules/characters/models/info';

@Component({
  selector: 'rm-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Output() prevClicked = new EventEmitter();
  @Output() nextClicked = new EventEmitter();
  @Input() paginationInfo: Info;
  prevDisabled = false;
  nextDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.disableButtons();
  }

  onPreviousClicked() {
    this.prevClicked.emit();
  }

  onNextClicked(){
    this.nextClicked.emit();
  }

  private disableButtons() {
    if (this.paginationInfo) {
      this.prevDisabled = !this.paginationInfo.prev;
      this.nextDisabled = !this.paginationInfo.next;
    }
  }
}
