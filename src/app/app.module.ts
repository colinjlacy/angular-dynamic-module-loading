import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutesService } from './app-routes.service';
import { AppDummyComponent } from './app-dummy.component';
//import { AppRoutesModule } from './app-routes.module';

const routes: Route[] = [
    {
        path: '',
        component: AppDummyComponent,
        loadChildren: './genres/genres.module#GenresModule'
         //loadChildren: './bands/bands.module#BandsModule',
    },
    {
        path: 'also-dummy',
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
        //AppRoutesModule
    ],
    providers: [
        AppRoutesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
