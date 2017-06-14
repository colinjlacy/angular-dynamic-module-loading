import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { ROUTES } from './routes/index';
import { VIEWS } from './views/index';
import { RESOLVES } from './resolves/index';
import { SERVICES } from './services/index';
import { model } from './reducers/model.reducer';

@NgModule({
    declarations: [
        ...VIEWS
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule,
        StoreModule.provideStore({model})
    ],
    providers: [
        ...RESOLVES,
        ...SERVICES
    ],
})
export class BandsModule {}
