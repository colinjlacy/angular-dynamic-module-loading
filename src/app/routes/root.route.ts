import { Route }   from '@angular/router';
import { FirstPageView } from '../views/first-page.view';
import { BandsResolve } from '../resolves/bands';

export const FIRST_PAGE_ROUTES: Route[] = [{
    path: '',
    component: FirstPageView,
    resolve: {
        bands: BandsResolve
    }
}];
