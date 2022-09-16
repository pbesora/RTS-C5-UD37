import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CharDetailsComponent } from './char-details/char-details.component';
import { CharFormComponent } from './char-form/char-form.component';
import { CharUpdateComponent } from './char-update/char-update.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from "./auth-guard.service";

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
    canActivate:[AuthGuardService],
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
    canActivate:[AuthGuardService],
    component: CharFormComponent
  },
  {
    path: 'characters/:id/update',
    canActivate:[AuthGuardService],
    component: CharUpdateComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
