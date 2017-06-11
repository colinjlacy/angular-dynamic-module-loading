import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';
import { DataService } from '../services/data.service';
import 'rxjs/add/operator/combineLatest';

@Injectable()
export class ModelResolve implements Resolve<any> {
    private obs: Observable<any>;

    constructor(private data: DataService, private store: Store<any>) {
        this.obs = new Observable();
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        console.log(route);
        let dataTypes = Object.keys(route.routeConfig['dependencies']);
        let dataObservables = [];

        dataTypes.forEach(type => {
            dataObservables.push(this.data.resolve(route.routeConfig['dependencies'][type], route.params))
        });
        /*
        TODO: THIS IS NO GOOD
         */
        return Rx.Observable.combineLatest(...dataObservables).combineLatest((latestValues: any[]) => {
            let retVal = {};
            for(let i = 0; i < dataTypes.length; i++) {
                retVal[dataTypes[i]] = latestValues[i];
            }
            this.store.dispatch({type: 'SET_MODEL', payload: retVal});
            return;
        });
    }
}
