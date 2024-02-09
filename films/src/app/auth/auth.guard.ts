import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private injector: Injector, private router: Router) {}

  canActivate: CanActivateFn = (route, state) => {
    const authService = this.injector.get(AuthService);
    console.log("AuthGuard est appelé pour accéder à l'URL " + state.url);
    
    if (authService.estconnecte) {
      return true;} 
      else {
      return this.router.navigate(['/login']);     
    }
  }
}

