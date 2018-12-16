import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersRoutingModule } from './/characters-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterModalComponent } from './character-modal/character-modal.component';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ],
  declarations: [CharactersListComponent, CharacterModalComponent],
  entryComponents: [CharacterModalComponent],
})
export class CharactersModule { }
