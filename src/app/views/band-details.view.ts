import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';

@Component({
    selector: 'first-page',
    template: `
    <h1>Second Page</h1>
    <div>
    <h2>{{band.name}}</h2>
    <h3>Songs:</h3>
    <ul>
        <li *ngFor="let song of band.songs" (click)="routeToSong(song.id)">{{song.name}}</li>
    </ul>
    <h3>Band members:</h3>
    <ul>
        <li *ngFor="let musician of band.members">{{musician}}</li>
    </ul>
    </div>
    `,
    styles: [`.left-panel { width: 50%; }`]
})
export class BandDetailsView {
    band: any;

    constructor(private route:ActivatedRoute, private router: Router) {
        this.band = {};
    }

    ngOnInit() {
        this.route.data.subscribe(val => this.band = val.model.band);
    }

    routeToSong(id) {
        this.router.navigate(['/', 'band', this.band.id, 'song', id]);
    }
}
