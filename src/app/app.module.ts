import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ROUTES } from './routes/index';
import { VIEWS } from './views/index';
import { RESOLVES } from './resolves/index';
import { SERVICES } from './services/index';
import { model } from './reducers/model.reducer';

@NgModule({
    declarations: [
        AppComponent,
        ...VIEWS
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(ROUTES),
        StoreModule.provideStore({model})
    ],
    providers: [
        ...RESOLVES,
        ...SERVICES
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
