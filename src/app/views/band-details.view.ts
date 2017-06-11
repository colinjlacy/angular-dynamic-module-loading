import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';

@Component({
    selector: 'first-page',
    template: `
    <h1>Second Page</h1>
    <h2>{{model.band.name}}</h2>
    <h3>Songs:</h3>
    <ul>
        <li *ngFor="let song of model.band.songs" (click)="routeToSong(song.id)">{{song.name}}</li>
    </ul>
    <h3>Band members:</h3>
    <ul>
        <li *ngFor="let musician of model.band.members">{{musician}}</li>
    </ul>
    `,
    styles: [`.left-panel { width: 50%; }`]
})
export class BandDetailsView {
    model: {band: any};
    private modelSubscription: any;

    constructor(private route:ActivatedRoute, private router: Router) {
        this.model = {
            band: {}
        };
    }

    ngOnInit() {
        this.modelSubscription = this.route.data.subscribe(val => this.model.band = val.model.band);
    }

    routeToSong(id) {
        this.router.navigate(['/', 'band', this.model.band.id, 'song', id]);
    }

    ngOnDestroy() {
        this.modelSubscription.unsubscribe();
    }
}
