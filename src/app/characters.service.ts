import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { Character } from "./models/character.model";

const baseUrl = 'https://ud37-db.herokuapp.com/characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Character[]>{
    return this.http.get<Character[]>(baseUrl);
  }

  get(id: any): Observable<Character>{
    return this.http.get<Character>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<Character>{
    return this.http.post(baseUrl, data);
  }

  update(id:any, data: any): Observable<Character>{
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<Character>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
