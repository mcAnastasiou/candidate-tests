import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filters } from '../models/filters';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'rm-characters-filters',
  templateUrl: './characters-filters.component.html',
  styleUrls: ['./characters-filters.component.scss']
})
export class CharactersFiltersComponent implements OnInit {
  @Output() applyClicked = new EventEmitter<Filters>();
  @Output() resetClicked = new EventEmitter();
  genderValue: string;
  speciesValue: string;
  statusValue: string;
  filters: Filters;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.filters = new Filters();
   }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.genderValue = params.gender;
      this.speciesValue = params.species;
      this.statusValue = params.status;
    });
  }

  onGenderSelected(gender) {
    this.filters.gender = gender;
  }

  onSpeciesSelected(species) {
    this.filters.species = species;
  }

  onStatusSelected(status) {
    this.filters.status = status;
  }

  onApplyClicked() {
    this.router.navigate(
      ['.'],
      { relativeTo: this.route, queryParams: this.filters }
    );
    this.applyClicked.emit(this.filters);
  }

  onResetClicked() {
    this.clearAllFilters();
    this.router.navigate(
      ['.'],
      { relativeTo: this.route }
    );
    this.resetClicked.emit();
  }

  private clearAllFilters() {
    this.genderValue = undefined;
    this.speciesValue = undefined;
    this.statusValue = undefined;
  }
}
