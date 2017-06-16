import { NgModule } from '@angular/core';
import { Route, RouterModule }   from '@angular/router';

import { BandListingView } from './views/band-listing.view';
import { BandDetailsView } from './views/band-details.view';
import { SongDetailsView } from './views/song-details.view';
import { ModelResolve } from './resolves/model.resolve';
import { ResolvedRoute } from './models/resolved-route.model';

export const BAND_ROUTES: ResolvedRoute[] = [
    {
        path: '',
        component: BandListingView,
        resolve: {
            model: ModelResolve
        },
        dependencies: {
            bands: 'get-bands'
        },
        children: [
            {
                path: 'band/:id',
                component: BandDetailsView,
                resolve: {
                    model: ModelResolve
                },
                dependencies: {
                    band: 'get-band'
                }
            }
        ],
    },
    {
        path: 'band/:id/song/:songId',
        component: SongDetailsView,
        resolve: {
            model: ModelResolve
        },
        dependencies: {
            song: 'get-song',
            band: 'get-band'
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(BAND_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class BandRoutesModule {}
