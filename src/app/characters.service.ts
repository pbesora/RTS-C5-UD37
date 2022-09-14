import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  returnResults(){
    return this.http.get("https://rickandmortyapi.com/api/character");
  }

  returnCharacter(id:any){
    return this.http.get("https://rickandmortyapi.com/api/character/"+id);
  }
}
