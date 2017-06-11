import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { Store } from '@ngrx/store';

import { BaseView } from './base.view';

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
export class SongDetailsView extends BaseView{

    constructor(public route:ActivatedRoute, public store: Store<any>) {
        super(store, route)
    }

}
