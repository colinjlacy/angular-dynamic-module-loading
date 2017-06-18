import { NgModule } from '@angular/core';
import { Route, RouterModule }   from '@angular/router';

import { REWIRED_ROUTES } from './genre-routes.const';

@NgModule({
    imports: [
        RouterModule.forChild(REWIRED_ROUTES)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        //AppRoutesService
    ]
})
export class GenreRoutesModule {}
