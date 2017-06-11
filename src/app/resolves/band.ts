import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BandResolve implements Resolve<any> {
    constructor(private http: Http) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.http.get('assets/data/band-details.json')
            .map(res => res.json().find((x) => x.id + '' === route.params['id']));
    }
}
