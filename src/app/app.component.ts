import { Component } from '@angular/core';
import { AppRoutesService } from './app-routes.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(private routesService: AppRoutesService) {}

    ngOnInit() {
        console.log('app component initialized!');
        this.routesService.setRoutes();
    }
}
