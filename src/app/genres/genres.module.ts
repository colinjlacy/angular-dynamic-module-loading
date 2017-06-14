import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { GenresView } from './genres.view';
import { GenreListingComponent } from './genre-listing.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule,
    ],
    declarations: [
        GenresView,
        GenreListingComponent
    ]
})
export class GenresModule {}
