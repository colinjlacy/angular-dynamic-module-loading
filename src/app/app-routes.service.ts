import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RouteMapping } from './models/route-mapping.model';


export function RewireRoutes(routes: Route[]): Route[] {
    // This function can't be resolved statically.
    // This may be because it references window, or uses string keys of a map.


/*
 *    if (!window['dynamicRouteMappings']) return routes;
 *
 *    const paths = Object.keys(window['dynamicRouteMappings']);
 *    routes.forEach((route: Route) => {
 *        if (route.children) {
 *            RewireRoutes(route.children);
 *        }
 *        const ind = paths.findIndex(x => x === route.path);
 *        if (ind > -1) {
 *            route.loadChildren = window['dynamicRouteMappings'][paths[ind]];
 *        }
 *    });
 */

    return routes;
}


@Injectable()
export class AppRoutesService {

    constructor(private http: Http) {}

    /*
     Simplified for this use case, but will be more
     flexible in the wild
     */
    static rewire(routes: Route[]): Route[] {
        // if no mapping has been passed to the window,
        // then there's nothing to work off of
        if(!window['dynamicRouteMappings']) return routes;

        const paths = Object.keys(window['dynamicRouteMappings']);
        routes.forEach((route: Route) => {
            if(route.children) {
                AppRoutesService.rewire(route.children);
            }
            const ind = paths.findIndex(x => x === route.path);
            if(ind > -1) {
                route.loadChildren = window['dynamicRouteMappings'][paths[ind]];
            }
        });

        return routes;
    }

    /*
     Hard coding this logic as an example, but could be based on any configurable
     data fetched from the backend - e.g. user's business, user role, user location, etc.
     */
    public fetchRouteMappings(): Observable<RouteMapping> {
        let filename = location.port + '' === '4200' ? 'full-routes' : 'partial-routes';
        return this.http.get(`assets/data/${filename}.json`).map(res => res.json());
    }

}
