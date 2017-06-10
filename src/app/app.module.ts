import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FIRST_PAGE_ROUTE } from './routes/root.route';
import { FirstPageView } from './views/first-page.view';

@NgModule({
    declarations: [
        AppComponent,
        FirstPageView
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([FIRST_PAGE_ROUTE])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
