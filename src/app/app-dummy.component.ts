import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dummy',
    template: `<h1>DUMMY!</h1>`
})
export class AppDummyComponent {
    constructor(private router: Router) {}

    ngOnInit() {
        console.log('router config as of dummy init', this.router.config);
    }
}
