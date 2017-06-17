import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { DynamicRouteMap } from './app.guard';


declare type RouteConfig = {
    rootModule: string,
    [key: string]: string;
};

/*
Simplified for this use case, but will be more
flexible in the wild
 */

@Injectable()
export class AppRoutesService {
    private routeConfig: RouteConfig;

    constructor(private http: Http, private router: Router, private activeRoute: ActivatedRoute) {
        router.events.subscribe(val => console.log('router event', val));
    }

    fetchRouteMappings(): Observable<RouteConfig> {
        const fileNameSegment = this.determineRoutePath();
        return this.fetchRoutes(fileNameSegment);
    }

    findChild(parentPath: string): string {
        return this.routeConfig[parentPath];
    }

    /*
     Hard coding this logic as an example
     */
    private determineRoutePath(): string {
        return location.port + '' === '4200' ? 'full-routes' : 'partial-routes';
    }

    private fetchRoutes(filename: string): Observable<{rootModule: string, [key: string]: string;}> {
        return this.http.get(`assets/data/${filename}.json`).map(res => res.json());
    }

    mapRoutes(routeDefinitions: {rootModule: string, [key: string]: string;}): Route[] {
        let routes: Route[] = [{
            path: '**',
            canActivate: [DynamicRouteMap]
        }];

        let route = {
            path: '',
            loadChildren: routeDefinitions.rootModule
        };

        routes.push(route);

        console.log('mapped routes', routes);

        return routes;
    }
}
