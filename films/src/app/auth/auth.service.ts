import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }
  estconnecte=false;
  seConnecter (login :string, mdp : string) : void
  {
    if (login =='admin' && mdp =='admin')
    {
      this.estconnecte=true;
      this.router.navigate(['/admin']);
    }
    else
    {
      alert('login ou mot de passe est incorrecte');
    }
  }
  logout(){
    this.estconnecte=false;
  }
}
