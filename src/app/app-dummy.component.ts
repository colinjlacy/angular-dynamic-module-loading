import { Component } from '@angular/core';

@Component({
    selector: 'app-dummy',
    template: `<h1>DUMMY!</h1>`
})
export class AppDummyComponent {
    constructor() {}

    ngOnInit() {
        console.log('This should never show up in the console.');
    }
}
