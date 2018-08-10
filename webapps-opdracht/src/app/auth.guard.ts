import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authenticationService: AuthenticationService, private _router: Router) { }

  canActivate(): boolean {
    // If user is logged in (= token is in localstorage)
    if (this._authenticationService.isLoggedIn()) {
      return true;
    } else {
      // Redirect to login component
      this._router.navigate(['/login']);
      return false;
    }
  }
}

