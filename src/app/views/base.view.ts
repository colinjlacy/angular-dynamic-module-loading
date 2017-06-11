import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

export interface iBaseViewOptions {
    preserveData?: boolean,
    preserveKeys?: string[]
}

export class BaseView {
    model: any;
    baseInitHooks: any[];
    baseDestroyHooks: any[];
    private modelSubscription: any;

    constructor(public store: Store<any>, public route: ActivatedRoute, private options: iBaseViewOptions = {preserveData: false, preserveKeys: []}) {
        this.baseInitHooks = [];
        this.baseDestroyHooks = [];
    }

    ngOnInit() {
        this.modelSubscription = this.store.select('model')
            .subscribe(val => {
                this.model = val;
            });
    }

    ngOnDestroy() {
        let viewDependencyKeys = Object.keys(this.route.routeConfig['dependencies']);
        if(!this.options.preserveData) {
            this.options.preserveKeys.forEach(key => {
                viewDependencyKeys.splice(viewDependencyKeys.indexOf(key), 1);
            });
            this.store.dispatch({type: 'REMOVE_DEPENDENCIES', payload: viewDependencyKeys});
            this.modelSubscription.unsubscribe();
        }
    }
}
