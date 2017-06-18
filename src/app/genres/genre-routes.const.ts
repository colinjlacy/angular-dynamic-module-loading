import { Route }   from '@angular/router';

import { AppRoutesService } from '../app-routes.service'
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
                path: 'genre/:genreId'
            }
        ]
    }
];

export const REWIRED_ROUTES: Route[] = AppRoutesService.rewire(GENRE_ROUTES);
