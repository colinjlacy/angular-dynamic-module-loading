import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';

@Component({
    selector: 'first-page',
    template: `
    <h1>{{model.song.name}}</h1>
    <div>
    <h2>{{model.band.name}}</h2>
    <h3>Band members:</h3>
    <ul>
        <li *ngFor="let musician of model.band.members">{{musician}}</li>
    </ul>
    </div>
    `,
    styles: [`.left-panel { width: 50%; }`]
})
export class SongDetailsView {

    model: {band: any, song: any};
    private modelSubscription: any;

    constructor(private route:ActivatedRoute, private router: Router) {
        this.model = {band: {}, song: {}}
    }

    ngOnInit() {
        this.modelSubscription = this.route.data.subscribe(val => {
            this.model.band = val.model.band;
            this.model.song = val.model.song;
        });
    }

    ngOnDestroy() {
        this.modelSubscription.unsubscribe();
    }

}
