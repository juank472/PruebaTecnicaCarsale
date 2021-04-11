import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Personaje } from "../api/personaje";
import { PersonajeService } from "../services/personaje.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {
  character: Personaje;
  public idPersonaje: any;

  constructor(private route: ActivatedRoute,
    private personajeService: PersonajeService,
    private modalService: NgbModal) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.getCharacter(this.idPersonaje);
  }

  getCharacter(id: string): void {
    this.personajeService.getCharacter(id).subscribe(character => {
      this.character = character;
    });
  }

  cerrar(): void {
    this.modalService.dismissAll();
  }
}