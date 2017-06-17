import { NgModule } from '@angular/core';
import { Route, RouterModule }   from '@angular/router';

import { GenresView } from './genres.view';
import { GenreListingComponent } from './genre-listing.component';
import { AppRoutesService } from '../app-routes.service';

export const GENRE_ROUTES: Route[] = [
    {
        path: '',
        component: GenresView,
        children: [
            {
                path: '',
                component: GenreListingComponent
            },
            {
                path: 'genre/:genreId',
                loadChildren: window['routeDefinitions']['genre/:genreId']
            }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(GENRE_ROUTES)
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})
export class GenreRoutesModule {}
