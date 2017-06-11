import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'first-page',
    template: `
    <h1>First Page</h1>
    <div class="left-panel">
        <ul>
            <li *ngFor="let band of bands" (click)="handleClick(band.id)"><b>{{band.name}}</b></li>
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
    bands:any[];

    constructor(private route:ActivatedRoute, private router: Router) {
        this.bands = [];
    }

    ngOnInit() {
        this.route.data.subscribe(val => this.bands = val.bands);
    }

    handleClick(id) {
        this.router.navigate(['/', 'band', id]);
    }
}
