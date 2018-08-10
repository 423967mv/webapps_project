import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    // Use of Injector prevents remaining Angular bugs
    const authenticationService = this.injector.get(AuthenticationService);
    const tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authenticationService.getToken()}`
      }
    });

    return next.handle(tokenizedRequest);
  }

}
