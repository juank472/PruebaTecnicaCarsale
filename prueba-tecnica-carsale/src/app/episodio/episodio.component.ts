import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Episodio } from "../api/episodio";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EpisodioService } from "../services/episodio.service";

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.scss']
})
export class EpisodioComponent implements OnInit {
  public idEpisodio: any;
  episodio: Episodio;

  constructor(private route: ActivatedRoute,
    private episodioService: EpisodioService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getEpisodio(this.idEpisodio);
  }

  getEpisodio(id: string): void {
    this.episodioService.getEspisodio(id).subscribe(episodio => {
      this.episodio = episodio;
    });
  }

  cerrar(): void {
    this.modalService.dismissAll();
  }
}
