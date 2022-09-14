import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { reduce } from 'rxjs';
import { CharactersService } from "../characters.service";

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.css'],

  template:`[style]='updateStatus(char.status)'`
})
export class CharDetailsComponent implements OnInit {
  id:any = null;
  char:any = null;

  dead = "#b01e1e";
  alive = "#2e7a23";
  unkn = "#9e9d9d";

  constructor(private activatedRoute:ActivatedRoute, private charactersService: CharactersService) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '[]');
  }

  updateStatus(status:any){
    if(status == "Alive"){
      return this.alive;
    }else if (status == "Dead") {
      return this.dead;
    }else {
      return this.unkn;
    }
  }


  ngOnInit(): void {
    this.charactersService.returnCharacter(this.id).subscribe(
      result => this.char = result
    )
  }


}
