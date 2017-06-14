import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { GenresModule } from './genres/genres.module';
import { BandsModule } from './bands/bands.module';
import { GenreRoutesModule } from './genres/genre-routes.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        GenresModule,
        BandsModule,
        GenreRoutesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
