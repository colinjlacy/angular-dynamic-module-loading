import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { GenresView } from './genres.view';
import { GenreRoutesModule } from './genre-routes.module';
import { GenreListingComponent } from './genre-listing.component';

@NgModule({
    imports: [
        HttpModule,
        RouterModule,
        GenreRoutesModule
    ],
    declarations: [
        GenresView,
        GenreListingComponent
    ]
})
export class GenresModule {}
