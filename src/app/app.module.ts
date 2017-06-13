import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { GenresModule } from './modules/genres/genres.module';
import { BandsModule } from './modules/bands/bands.module';
import { GENRE_ROUTES } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        GenresModule,
        BandsModule,
        RouterModule.forRoot(GENRE_ROUTES)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
