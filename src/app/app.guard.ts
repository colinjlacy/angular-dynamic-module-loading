import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from "@angular/router";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { AppRoutesService } from './app-routes.service';
import { RouteMapping } from './models/route-mapping.model';

@Injectable()
export class DynamicRouteMap implements CanActivate {

    private isLoaded: boolean;
    private routeMapping: RouteMapping;

    constructor(private router: Router, private http: Http) {
        this.isLoaded = false;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return new Promise(resolve => {
            if (this.isLoaded) {
                console.log('about to navigate to route', route);
                console.log('about to navigate to state', state);
                resolve(true);
                return;
            }

            this.fetchRouteMappings()
                .subscribe(mappings => {
                    this.routeMapping = mappings;
                    let routes = this.mapRoutes(this.routeMapping);
                    this.router.resetConfig(routes);

                    // Set isLoaded to true, stop the original navigation request
                    this.isLoaded = true;
                    resolve(false);

                    // Retry the original navigation request
                    this.router.navigateByUrl(state.url);
                });
        });
    }

    fetchRouteMappings(): Observable<RouteMapping> {
        const fileNameSegment = this.determineRoutePath();
        return this.fetchRoutes(fileNameSegment);
    }

    private determineRoutePath(): string {
        return location.port + '' === '4200' ? 'full-routes' : 'partial-routes';
    }

    private fetchRoutes(filename: string): Observable<{rootModule: string, [key: string]: string;}> {
        return this.http.get(`assets/data/${filename}.json`).map(res => res.json());
    }

    private mapRoutes(routeDefinitions: RouteMapping): Route[] {

        let routes: Route[] = [{
            path: '',
            canActivate: [DynamicRouteMap],
            loadChildren: routeDefinitions.rootModule
        }];

        return routes;
    }

}
