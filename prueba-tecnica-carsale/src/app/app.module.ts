import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { PersonajesComponent } from './personajes/personajes.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { FichaComponent } from './ficha/ficha.component';
import { EpisodioComponent } from './episodio/episodio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    EpisodiosComponent,
    FichaComponent,
    EpisodioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
