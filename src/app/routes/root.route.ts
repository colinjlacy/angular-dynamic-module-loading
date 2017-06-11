import { Route }   from '@angular/router';
import { BandListingView } from '../views/band-listing.view';
import { BandDetailsView } from '../views/band-details.view';
import { SongDetailsView } from '../views/song-details.view';
import { BandsResolve } from '../resolves/bands.resolve';
import { BandResolve } from '../resolves/band.resolve';
import { SongResolve } from '../resolves/song.resolve';

export const FIRST_PAGE_ROUTES: Route[] = [
    {
        path: '',
        component: BandListingView,
        resolve: {
            bands: BandsResolve
        },
        children: [
            {
                path: 'band/:id',
                component: BandDetailsView,
                resolve: {
                    band: BandResolve
                }
            }
        ],
    },
    {
        path: 'band/:id/song/:songId',
        component: SongDetailsView,
        resolve: {
            song: SongResolve,
            band: BandResolve
        }
    }
];
