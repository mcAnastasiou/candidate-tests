import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';

const appRoutes: Routes = [
  {
    path: 'error', component: ErrorComponent,
  },
  {
    path: '', redirectTo: '/characters', pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
