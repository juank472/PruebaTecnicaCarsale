
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonajesComponent } from "./personajes/personajes.component";
import { EpisodiosComponent } from "./episodios/episodios.component";
import { EpisodioComponent } from "./episodio/episodio.component";
import { FichaComponent } from "./ficha/ficha.component";

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'episodios', component: EpisodiosComponent },
  { path: 'personaje/:id', component: FichaComponent },
  { path: 'episodio/:id', component: EpisodioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }