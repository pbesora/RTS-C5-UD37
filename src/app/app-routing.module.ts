import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CharDetailsComponent } from './char-details/char-details.component';
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
    path: 'character/:id',
    component: CharDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
