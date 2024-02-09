import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';


@Component({
  selector: 'app-ajouter-film',
  templateUrl: './ajouter-film.component.html',
  styleUrls: ['./ajouter-film.component.css']
})
export class AjouterFilmComponent implements OnInit {
  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {}

  ajouterFilm(nom: string, description: string): void {
    if (nom.trim() && description.trim()) {
      this.filmsService.ajouterFilm(nom.trim(), description.trim());
    }
  }
}
