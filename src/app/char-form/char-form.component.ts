import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { CharactersService } from "../characters.service";

@Component({
  selector: 'app-char-form',
  templateUrl: './char-form.component.html',
  styleUrls: ['./char-form.component.css']
})

export class CharFormComponent implements OnInit {

  character: Character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
    image: ''
  }
  submitted = false;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
  }

  saveCharacter(): void {
    this.updateStatus();
    this.updateGender();
    const data = {
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      location: this.character.location,
      image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'
    };

    this.charactersService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCharacter(): void {
    this.submitted = false;
    this.character = {
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      location: '',
      image: ''
    }
  }

  updateStatus(): void {
    switch (this.character.status) {
      case '2':
        this.character.status = 'Alive';
        break;

      case '3':
        this.character.status = 'Dead';
        break;
      default:
        this.character.status
        break;
    }
  }

  updateGender(): void {
    switch (this.character.gender) {
      case '2':
        this.character.gender = 'Female';
        break;

      case '3':
        this.character.gender = 'Male';
        break;
      case '4':
        this.character.gender = 'Genderless';
        break;
      default:
        this.character.gender
        break;
    }
  }
}
