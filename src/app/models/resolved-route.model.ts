import { Route } from '@angular/router';

export interface ResolvedRoute extends Route {
    dependencies?: {[key: string]: string}
    children?: ResolvedRoute[]
}

export declare type ResolvedRouteConfig = ResolvedRoute[];
