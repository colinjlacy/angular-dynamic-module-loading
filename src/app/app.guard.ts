import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

import { AppRoutesService } from './app-routes.service';

@Injectable()
export class DynamicRouteMap implements CanActivate {

    private isLoaded: boolean;

    constructor(private routesService: AppRoutesService, private router: Router) {
        this.isLoaded = false;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return new Promise(resolve => {
            if (this.isLoaded) {
                // The routes have already been added.
                // If we've hit this again, the route definitely doesn't exist.
                resolve(true);
                return;
            }

            this.routesService.fetchRouteMappings()
                .subscribe(mappings => {
                    this.routesService.mapRoutes(mappings);

                    // Set isLoaded to true, stop the original navigation request
                    this.isLoaded = true;
                    resolve(false);

                    // Retry the original navigation request
                    this.router.navigateByUrl(state.url);
                });
        });
    }
}
