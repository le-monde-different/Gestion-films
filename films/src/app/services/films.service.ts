import { Injectable } from '@angular/core';
import { Film } from '../shared/models/film';
import { FILMS } from '../shared/models/des-films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  films: Film[] = FILMS;
  constructor() { }
  getFilms(): Film[] {
    return this.films;
   }
   supprimerFilm(film: Film): void {
    const index = this.films.indexOf(film);
    if (index !== -1) {
      this.films.splice(index, 1);
    }
  }
  ajouterFilm(nom: string, description: string): void {
    if (this.films && this.films.length > 0) {
      const lastFilm = this.films[this.films.length - 1];
      if (lastFilm && typeof lastFilm.id === 'number') {
        const id = lastFilm.id + 1;
        const nouveauFilm = { id, nom, description };
        this.films.push(nouveauFilm);
      }
    }
}



  modifierFilm(id: number, nouveauNom: string, nouvelleDescription: string): void {
    const filmAModifier = this.films.find(film => film.id === id);
    if (filmAModifier ) {
        filmAModifier.nom = nouveauNom;
        filmAModifier.description = nouvelleDescription;
    }
}


  
  
}
  
  

