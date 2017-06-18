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

    constructor(private router: Router, private routeService: AppRoutesService) {
        this.isLoaded = false;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return new Promise(resolve => {
            if (this.isLoaded) {
                resolve(true);
                return;
            }

            this.routeService.fetchRouteMappings()
                .subscribe(mappings => {
                    /*
                    I tried every way I could think of to pass this mapping around
                    the app without attaching it to the window.  I can't really find
                    a better way to get this data into lazy-loaded route configs in
                    order to remap to load their own child modules programmatically
                     */
                    window['dynamicRouteMappings'] = mappings;
                    let routes = this.mapRoutes(mappings);
                    this.router.resetConfig(routes);

                    // Set isLoaded to true, stop the original navigation request
                    this.isLoaded = true;
                    resolve(false);

                    // Retry the original navigation request
                    this.router.navigateByUrl(state.url);
                });
        });
    }

    private mapRoutes(routeDefinitions: RouteMapping): Route[] {

        let routes: Route[] = [{
            path: '',
            loadChildren: routeDefinitions.rootModule
        }];

        return routes;
    }
}
