import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CharDetailsComponent } from './char-details/char-details.component';
import { CharFormComponent } from './char-form/char-form.component';
import { CharUpdateComponent } from './char-update/char-update.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'characters/:id',
    component: CharDetailsComponent
  },
  {
    path: 'add-char',
    component: CharFormComponent
  },
  {
    path: 'characters/:id/update',
    component: CharUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
