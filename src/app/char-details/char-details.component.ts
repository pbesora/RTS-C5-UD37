import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from "../characters.service";
import { Character } from '../models/character.model';

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.css'],

  template:`[style]='updateStatus(char.status)'`
})
export class CharDetailsComponent implements OnInit {

  currentCharacter: Character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
    image: ''
  }


  dead = "#b01e1e";
  alive = "#2e7a23";
  unkn = "#9e9d9d";

  constructor(private activatedRoute:ActivatedRoute, private charactersService: CharactersService, private router: Router) { }

  ngOnInit(): void {

    this.getCharacter(this.activatedRoute.snapshot.paramMap.get('id')||'1')
  }

  getCharacter(id: string): void {
    this.charactersService.get(id)
      .subscribe(
        data => {
          this.currentCharacter = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  deleteCharacter(): void{
    this.charactersService.delete(this.currentCharacter.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/characters']);
      },
      error =>{
        console.log(error);
      }
    );
  }

  updateStatusColor(status:any){
    if(status == "Alive"){
      return this.alive;
    }else if (status == "Dead") {
      return this.dead;
    }else {
      return this.unkn;
    }
  }
}
