import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersRoutingModule } from './/characters-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterModalComponent } from './character-modal/character-modal.component';
import { CharactersFiltersComponent } from './characters-filters/characters-filters.component';
import { GenderFilterComponent } from './characters-filters/gender-filter/gender-filter.component';
import { SpeciesFilterComponent } from './characters-filters/species-filter/species-filter.component';
import { StatusFilterComponent } from './characters-filters/status-filter/status-filter.component';
import { CharactersResolverService } from './services/characters-resolver.service';
import { CharactersTableComponent } from './characters-table/characters-table.component';

@NgModule({
  imports: [CommonModule, CharactersRoutingModule, SharedModule, NgbModule],
  declarations: [
    CharactersListComponent,
    CharacterModalComponent,
    CharactersFiltersComponent,
    CharactersFiltersComponent,
    GenderFilterComponent,
    SpeciesFilterComponent,
    StatusFilterComponent,
    CharactersTableComponent
  ],
  entryComponents: [CharacterModalComponent],
  providers: [CharactersResolverService]
})
export class CharactersModule {}
