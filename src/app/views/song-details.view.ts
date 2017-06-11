import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';

@Component({
    selector: 'first-page',
    template: `
    <h1>{{song.name}}</h1>
    <div>
    <h2>{{band.name}}</h2>
    <h3>Band members:</h3>
    <ul>
        <li *ngFor="let musician of band.members">{{musician}}</li>
    </ul>
    </div>
    `,
    styles: [`.left-panel { width: 50%; }`]
})
export class SongDetailsView {
    band: any;
    song: any;

    constructor(private route:ActivatedRoute, private router: Router) {
        this.band = {};
        this.song = {};
    }

    ngOnInit() {
        this.route.data.subscribe(val => {
            console.log(val);
            this.band = val.band;
            this.song = val.song;
        });
    }
}
