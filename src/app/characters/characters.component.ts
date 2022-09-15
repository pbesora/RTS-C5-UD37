import { Component, OnInit } from '@angular/core';
import { CharactersService } from "../characters.service";
import { Character } from '../models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters?:Character[];

  constructor(private charactersService: CharactersService){
  }

  ngOnInit(): void {
    this.retrieveCharacters();
  }

  retrieveCharacters():void{
    this.charactersService.getAll()
      .subscribe(
        data => {
          this.characters = data;
          console.log(data);
        },
        error => {
          console.log(error)
        });
  }
}
