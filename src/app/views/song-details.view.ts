import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
    selector: 'first-page',
    template: `
    <h1>{{model.song.name}}</h1>
    <h2>{{model.band.name}}</h2>
    <h3>Band members:</h3>
    <ul>
        <li *ngFor="let musician of model.band.members">{{musician}}</li>
    </ul>
    `,
    styles: [`.left-panel { width: 50%; }`]
})
export class SongDetailsView {

    model: any;
    private modelSubscription: any;

    constructor(private route:ActivatedRoute, private router: Router, private store: Store<any>) {
        this.model = {band: {}, song: {}}
    }

    ngOnInit() {
        this.modelSubscription = this.store.select('model')
            .subscribe(val => {
                this.model = val;
            });
    }

    ngOnDestroy() {
        this.modelSubscription.unsubscribe();
    }

}
