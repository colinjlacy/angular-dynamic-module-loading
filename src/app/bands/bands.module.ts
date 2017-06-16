import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { BandRoutesModule } from './band-routes.module';
import { VIEWS } from './views/index';
import { RESOLVES } from './resolves/index';
import { SERVICES } from './services/index';
import { model } from './reducers/model.reducer';

@NgModule({
    declarations: [
        ...VIEWS
    ],
    imports: [
        CommonModule,
        BandRoutesModule,
        HttpModule,
        StoreModule.provideStore({model})
    ],
    providers: [
        ...RESOLVES,
        ...SERVICES
    ],
})
export class BandsModule {}
