import {Injectable} from "@angular/core";
import {AuthService} from "../auth/auth.service";
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class EsSupervisorGuard{
  constructor(
    private readonly _authService: AuthService
  ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //logica, retorna booleano
    const esSupervisor = this._authService
      .roles
      .some(
        (rol) => {
          return rol === 'Supervisor'
        }
      )
    return esSupervisor;
  }
}
