import { NgModule } from '@angular/core';
import { Route, RouterModule }   from '@angular/router';

import { BAND_ROUTES } from '../bands/routes/root.route';
import { GenresView } from './genres.view';
import { GenreListingComponent } from './genre-listing.component';

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
                component: GenresView,
                children: BAND_ROUTES
            }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(GENRE_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class GenreRoutesModule {}
