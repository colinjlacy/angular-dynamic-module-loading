import { Route }   from '@angular/router';

import { BAND_ROUTES } from './modules/bands/routes/root.route';
import { GenresView } from './modules/genres/genres.view';
import { GenreListingComponent } from './modules/genres/genre-listing.component';

export const GENRE_ROUTES = [
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
