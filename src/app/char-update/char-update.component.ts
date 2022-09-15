import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../models/character.model';
import { CharactersService } from "../characters.service";

@Component({
  selector: 'app-char-update',
  templateUrl: './char-update.component.html',
  styleUrls: ['./char-update.component.css']
})
export class CharUpdateComponent implements OnInit {

  character: Character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
    image: ''
  }

  constructor(private activatedRoute:ActivatedRoute, private charactersService: CharactersService, private router: Router) { }

  ngOnInit(): void {
    this.getCharacter(this.activatedRoute.snapshot.paramMap.get('id')||'1')
  }

  getCharacter(id: string): void {
    this.charactersService.get(id)
      .subscribe(
        data => {
          this.character = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCharacter(): void {
    this.updateGender();
    this.updateStatus();
    this.charactersService.update(this.character.id, this.character)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/characters']);
        },
        error => {
          console.log(error);
        });
  }

  updateStatus():void{
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
