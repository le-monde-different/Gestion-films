import { Component, OnInit } from '@angular/core';
import { Film } from '../../shared/models/film';
import { FILMS } from '../../shared/models/des-films';

@Component({
  selector: 'app-home-visiteur',
  templateUrl: './home-visiteur.component.html',
  styleUrl: './home-visiteur.component.css',
  
})
export class HomeVisiteurComponent implements OnInit{
tabFilms:Film[]= FILMS;
  afficheDesc(film: Film): void {
    film.descVisible = true;
  }

  cacherDesc(film: Film): void {
    film.descVisible = false;
  }


constructor(){}
ngOnInit():void{}
}
