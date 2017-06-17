import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutesService } from './app-routes.service';
import { AppDummyComponent } from './app-dummy.component';
import { DynamicRouteMap } from './app.guard';

const routes: Route[] = [
    /*
    This route definition kicks off the initial DynamicRouteMap guard.
    In doing so, it fetches the route mapping and sets the root route.
    Notice that the console log in AppDummyComponent never fires.
     */
    {
        path: '**',
        component: AppDummyComponent,
        canActivate: [DynamicRouteMap]
    },
    /*
    These two routes don't do anything and will be replaced immediately.
    The only reason they're here is for the purposes of this demo.
    Since @angular/cli uses @ngtools/webpack, I needed to have the modules
    I'll eventually call listed in a `loadChildren` property so that
    they'll be parsed out into a build chunk.

    In the wild you'd have your own modules chunked out as part of your
    build process.
     */
    {
        path: 'dummy',
        component: AppDummyComponent,
        loadChildren: './genres/genres.module#GenresModule'
    },
    {
        path: 'also-dummy',
        component: AppDummyComponent,
        loadChildren: './bands/bands.module#BandsModule'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        AppDummyComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        AppRoutesService,
        DynamicRouteMap
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
