import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';

const characterRoutes: Routes = [
  {
    path: 'characters', component: CharactersListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(characterRoutes)
  ],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
