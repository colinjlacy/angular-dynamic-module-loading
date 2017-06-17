import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppRoutesService } from './app-routes.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(private routesService: AppRoutesService, private route: ActivatedRoute) {}

    ngOnInit() {
        console.log('app component initialized!', this.route.snapshot);
        //this.routesService.setRoutes();
    }
}
