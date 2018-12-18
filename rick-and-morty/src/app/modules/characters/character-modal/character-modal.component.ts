import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../models/result';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Episode } from '../models/episode';
import { Info } from '../models/info';
import { PagianationUtil } from 'src/app/utils/pagination-util';

@Component({
  selector: 'rm-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.scss']
})
export class CharacterModalComponent implements OnInit{
  @Input() character: Result;
  @Input() episodes: Episode[];
  private readonly itemsPerPage = 5;
  private currentPage = 1;
  info: Info;
  pageEpisodes: Episode[];

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    if (this.episodes) {
      this.info = PagianationUtil.getPaginationInfo(this.episodes.length, this.itemsPerPage);
      this.pageEpisodes = this.getPageEpisodes();
    }
  }

  onPrevClicked() {
    this.currentPage -= 1;
    this.onPaginationButtonClicked();
  }

  onNextClicked() {
    this.currentPage += 1;
    this.onPaginationButtonClicked();
  }

  getEpisodeIndex(index) {
    return PagianationUtil.getPageItemIndex(this.itemsPerPage, this.currentPage, index);
  }

  private onPaginationButtonClicked() {
    this.info = PagianationUtil.getPaginationInfo(this.episodes.length, this.itemsPerPage, this.currentPage);
    this.pageEpisodes = this.getPageEpisodes();
  }

  private getPageEpisodes(): Episode[] {
    return PagianationUtil.getPageItems(this.episodes, this.itemsPerPage, this.currentPage);
  }
}
