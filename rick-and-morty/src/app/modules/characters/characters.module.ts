import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersRoutingModule } from './/characters-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  declarations: [CharactersListComponent]
})
export class CharactersModule { }
