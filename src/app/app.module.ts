import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';
import { CharacterComponent } from './character/character.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { CharDetailsComponent } from './char-details/char-details.component';
import { CharFormComponent } from './char-form/char-form.component';
import { FormsModule } from "@angular/forms";
import { CharUpdateComponent } from './char-update/char-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    AboutComponent,
    CharacterComponent,
    HomeComponent,
    CharDetailsComponent,
    CharFormComponent,
    CharUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
