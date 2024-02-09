import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../shared/models/film';
import { FILMS } from '../../shared/models/des-films';
import { NgForm } from '@angular/forms';
import { FilmsService } from '../../services/films.service';
@Component({
  selector: 'app-modifier-film',
  templateUrl: './modifier-film.component.html',
  styleUrls: ['./modifier-film.component.css']
})
export class ModifierFilmComponent implements OnInit {
  films: Film[] = FILMS;
  nomFilm: string = ''; 
  descriptionFilm: string = '';

  constructor(private route: ActivatedRoute,private filmsService: FilmsService) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log('ID du film:', id);
  }

  modifierFilm(nom: string, description: string): void {
    
    const id = this.route.snapshot.params['id'];
    const filmAModifier = this.films.find(film => film.id === id);

   
    if (filmAModifier) {
      
      filmAModifier.nom = nom;
      filmAModifier.description = description;

      
      console.log('Film modifié:', filmAModifier);
    } else {
      console.log('Film non trouvé');
    }
  }

  soumettre(f: NgForm): void {
    const nouveauNom = f.value['nom'];
    const nouvelleDescription = f.value['description'];
    const id = this.route.snapshot.params['id'];
    this.filmsService.modifierFilm(id, nouveauNom, nouvelleDescription);
}

}
