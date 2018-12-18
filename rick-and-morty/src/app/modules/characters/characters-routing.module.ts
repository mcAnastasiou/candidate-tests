import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersResolverService } from './services/characters-resolver.service';

const characterRoutes: Routes = [
  {
    path: 'characters', component: CharactersListComponent, resolve: { rootObject : CharactersResolverService}
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(characterRoutes)
  ],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
