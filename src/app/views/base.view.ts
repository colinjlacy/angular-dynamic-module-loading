import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

export class BaseView {
    model: any;
    private modelSubscription: any;

    constructor(public store: Store<any>, public route: ActivatedRoute) {}

    ngOnInit() {
        this.modelSubscription = this.store.select('model')
            .subscribe(val => {
                this.model = val;
            });
    }

    ngOnDestroy() {
        this.store.dispatch({type: 'REMOVE_DEPENDENCIES', payload: this.route.routeConfig['dependencies']});
        this.modelSubscription.unsubscribe();
    }
}
