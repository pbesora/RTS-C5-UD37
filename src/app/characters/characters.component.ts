import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { withDisabledInitialNavigation } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  ids:any = null;
  characters:any = null;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.http.get("https://rickandmortyapi.com/api/character/[1,45,765,23,5,88,600,34]")
    .subscribe(
      result => {
        this.characters = result;
    },
    error =>{
        console.log('Error getting the data');
    }
    );
  }
}
