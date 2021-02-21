import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuntenticadorJWTService } from './auntenticador-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanLoad{

  constructor(private servicioJWT: AuntenticadorJWTService, private router: Router) { }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.servicioJWT.recuperaJWT() == null) {
      this.router.navigateByUrl('/login');
    }
    return (this.servicioJWT.recuperaJWT() != null);
  }
}
