import { Component, OnInit } from "@angular/core";
import { EpisodioApi } from "../api/episodio-api";
import { EpisodioService } from "../services/episodio.service";
import { EpisodioComponent } from "../episodio/episodio.component"
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent implements OnInit {
  episodesCall: EpisodioApi;
  pages: number[];
  currentPage = 1;


  constructor(private episodioService: EpisodioService,
    private modalService: NgbModal) { }

  ngOnInit() { this.getEpisodes(); }

  getEpisodes(page = 1): void {
    this.episodioService.getEpisodios(page).subscribe(episodes => {
      this.episodesCall = episodes;
      this.fillInPageArray(episodes.info.pages);
      this.currentPage = page;
    });
  }

  fillInPageArray(total: number): void {
    this.pages = [] as number[];

    for (var counter: number = 1; counter <= total; counter++) {
      this.pages.push(counter);
    }
  }

  public abrirModal(episodio: any): void {
    const activeModal = this.modalService.open(EpisodioComponent, { size: 'lg' });
    activeModal.componentInstance.idEpisodio = episodio.id;
  }

}