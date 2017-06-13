import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { BaseView } from './base.view';

@Component({
    selector: 'first-page',
    template: `
    <h1>First Page</h1>
    <div class="left-panel">
        <ul>
            <li *ngFor="let band of model.bands" (click)="handleClick(band.id)"><b>{{band.name}}</b></li>
        </ul>
    </div>
    <div class="right-panel">
        <router-outlet></router-outlet>
    </div>
    `,
    styles: [
        `.left-panel { float: left; width: 50%; }`,
        `.right-panel { float: left; width: 50%; }`,
    ]
})
export class BandListingView extends BaseView {

    constructor(public route:ActivatedRoute, private router: Router, public store: Store<any>) {
        super(store, route);
        this.baseViewHooks.initHooks.push({action: this.logMessage, arguments: ['COLIN!!!']});
        this.baseViewHooks.destroyHooks.push({action: this.logMessage, arguments: ['LACY!!!']});
    }

    handleClick(id) {
        this.router.navigate(['band', id], { relativeTo: this.route });
    }

    logMessage(message) {
        console.log(message);
    }

}
