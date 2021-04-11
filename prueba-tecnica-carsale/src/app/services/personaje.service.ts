import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PersonajeApi } from "../api/personaje-api";
import { Personaje } from "../api/personaje";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  constructor(private http: HttpClient) { }
  
  getCharacters(page = 1, term = ""): Observable<PersonajeApi> {
    return this.http.get<PersonajeApi>(`${environment.charactersUrl}/?page=${page}${(term === "") ? "" : "&name=" + term}`);
  }
  getCharacter(id: string): Observable<Personaje> {
    return this.http.get<Personaje>(`${environment.charactersUrl}/${id}`);
  }
}