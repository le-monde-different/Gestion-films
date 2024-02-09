import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AjouterFilmComponent } from './ajouter-film/ajouter-film.component';
import { ListerFilmsComponent } from './lister-films/lister-films.component';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { ModifierFilmComponent } from './modifier-film/modifier-film.component';
import { AuthGuardService } from '../auth/auth.guard';
const routes: Routes = [
  { path: '', component: AdminComponent ,canActivate : [AuthGuardService],
            children :[
                      {path : 'ajouter-film' , component : AjouterFilmComponent},
                      {path : 'lister-films', component : ListerFilmsComponent},
                      {path: 'details/:id', component: DetailsFilmComponent },
                      {path: 'modifier/:id', component: ModifierFilmComponent }
                     ]},
                     
  
            
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
