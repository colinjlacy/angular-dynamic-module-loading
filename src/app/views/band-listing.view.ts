import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

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
export class BandListingView {
    model: any;
    private modelSubscription: any;

    constructor(private route:ActivatedRoute, private router: Router, private store: Store<any>) {
        this.model = {
            bands: []
        };
    }

    ngOnInit() {
        this.modelSubscription = this.store.select('model')
            .subscribe(val => {
            this.model = val;
        });
    }

    handleClick(id) {
        this.router.navigate(['/', 'band', id]);
    }

    ngOnDestroy() {
        this.modelSubscription.unsubscribe();
    }

}
