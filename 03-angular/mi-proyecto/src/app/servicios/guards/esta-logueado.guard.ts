import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class EstaLogueadoGuard implements CanActivate{

  constructor(
    private readonly _authService: AuthService
  ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //logica, retorna booleano
    if (this._authService.estaAutenticada)
      return true;
    else
      return false;
  }

}
