import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'genres-view',
    template: `
    <h1>Genres</h1>
    <ul>
        <li (click)="loadBands(1)">Rock</li>
        <li (click)="loadBands(2)">Hip Hop</li>
    </ul>
    `
})
export class GenreListingComponent {

    constructor(private router: Router) {}

    loadBands(id) {
        this.router.navigate(['/', 'genre', id])
    }
}
