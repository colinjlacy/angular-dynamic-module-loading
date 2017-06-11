import { Route }   from '@angular/router';
import { BandListingView } from '../views/band-listing.view';
import { BandDetailsView } from '../views/band-details.view';
import { BandEmptyView } from '../views/band-empty.view';
import { BandsResolve } from '../resolves/bands';
import { BandResolve } from '../resolves/band';

export const FIRST_PAGE_ROUTES: Route[] = [{
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
    ]
}];
