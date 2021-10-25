import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreService } from '../services';

@Injectable({
    providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

    constructor(private router: Router, private store: StoreService) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log(this.store.account);

        if (this.store.account) {
            if (this.store.account.sf !== 0) {
                return false
            }
            return true
        }
        return this.router.parseUrl('/404');
    }

}
