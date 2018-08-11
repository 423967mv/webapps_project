import { TestBed, inject } from '@angular/core/testing';

import { TokenInterceptorService } from './token-interceptor.service';
import { AuthenticationService } from './authentication.service';

describe('TokenInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInterceptorService, AuthenticationService]
    });
  });

  it('should be created', inject([TokenInterceptorService], (service: TokenInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
