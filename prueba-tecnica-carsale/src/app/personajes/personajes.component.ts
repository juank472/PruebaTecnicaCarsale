import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PersonajeApi } from "../api/personaje-api";
import { PersonajeService } from "../services/personaje.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FichaComponent } from "../ficha/ficha.component";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  characterCall: PersonajeApi;
  pages: number[];
  currentPage = 1;
  searchTerm = "";

  constructor(
    private personajeService: PersonajeService,
    private route: ActivatedRoute,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if (params.fromPage) {
          this.currentPage = Number(params.fromPage);
          if (Number.isNaN(this.currentPage)) { this.currentPage = 1; }
        }
        if (params.nameSearch) { this.searchTerm = params.nameSearch; }

        this.getCharacters(this.currentPage);
      });
  }

  getCharacters(page = 1): void {
    this.personajeService.getCharacters(page, this.searchTerm).subscribe(characters => {
      this.characterCall = characters;
      this.fillInPageArray(characters.info.pages);
      this.currentPage = page;
    });
  }

  fillInPageArray(total: number): void {
    this.pages = [] as number[];

    for (var counter: number = 1; counter <= total; counter++) {
      this.pages.push(counter);
    }
  }

  public abrirModalPersonaje(personaje: any): void {
    const activeModal = this.modalService.open(FichaComponent, { size: 'lg' });
    activeModal.componentInstance.idPersonaje = personaje.id;
  }


}
