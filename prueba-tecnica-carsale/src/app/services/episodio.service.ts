import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EpisodioApi } from "../api/episodio-api";
import { Episodio } from "../api/episodio";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class EpisodioService {
  constructor(private http: HttpClient) { }
  getEpisodios(page = 1): Observable<EpisodioApi> {
    return this.http.get<EpisodioApi>(`${environment.episodesUrl}/?page=${page}`);
  }
  getEspisodio(id: string): Observable<Episodio> {
    return this.http.get<Episodio>(`${environment.episodesUrl}/${id}`);
  }
}