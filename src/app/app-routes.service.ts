import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
Simplified for this use case, but will be more
flexible in the wild
 */

@Injectable()
export class AppRoutesService {
    private routeConfig: {
        rootModule: string,
        [key: string]: string;
    };

    constructor(private http: Http, private router: Router) {}

    setRoutes(): void {
        const fileNameSegment = this.determineRoutePath();
        this.fetchRoutes(fileNameSegment).subscribe(val => {
            this.routeConfig = val;
            const routes = this.mapRoutes(this.routeConfig);
            this.router.resetConfig(routes);
            this.router.navigate(['']);
        });
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

    private mapRoutes(routeDefinitions: {rootModule: string, [key: string]: string;}): Route[] {
        let routes: Route[] = [];

        let route = {
            path: '',
            loadChildren: routeDefinitions.rootModule
        };

        routes.push(route);

        console.log('mapped routes', routes);

        return routes;
    }
}
