import { NgModule } from '@angular/core';
import { Route, RouterModule }   from '@angular/router';

export const GENRE_ROUTES: Route[] = [
    {
        path: '',
        loadChildren: './genres/genres.module#GenresModule'
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
export class AppRoutesModule {}
