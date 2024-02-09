import { Component, OnInit } from '@angular/core';
import { Film } from '../../shared/models/film';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-lister-films',
  templateUrl: './lister-films.component.html',
  styleUrl: './lister-films.component.css'
})
export class ListerFilmsComponent implements OnInit {
tabFilms:Film[]=[];
constructor(private filmsService:FilmsService){}
ngOnInit(): void {
  this.tabFilms=this.filmsService.getFilms();
}
supprimerFilm(film: Film): void {
  this.filmsService.supprimerFilm(film);

}
}

