import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

export interface iBaseViewOptions {
    preserveData?: boolean,
    preserveKeys?: string[]
}

export class BaseView {
    model: any;
    baseViewHooks: {
        context: any,
        initHooks: Array<{action: Function, arguments?: any[]}>,
        destroyHooks: Array<{action: Function, arguments?: any[]}>
    };
    private modelSubscription: any;

    constructor(public store: Store<any>, public route: ActivatedRoute, private options: iBaseViewOptions = {preserveData: false, preserveKeys: []}) {
        this.baseViewHooks = {
            context: null,
            initHooks: [],
            destroyHooks: []
        };
    }

    ngOnInit() {
        this.modelSubscription = this.store.select('model')
            .subscribe(val => {
                this.model = val;
            });
        this.baseViewHooks.initHooks.forEach((hook: any) => {
            hook.action.call(this.baseViewHooks.context || this, ...hook.arguments);
        });
    }

    ngOnDestroy() {
        if(!this.options.preserveData) {
            let viewDependencyKeys = Object.keys(this.route.routeConfig['dependencies']);
            this.options.preserveKeys.forEach(key => {
                viewDependencyKeys.splice(viewDependencyKeys.indexOf(key), 1);
            });
            this.store.dispatch({type: 'REMOVE_DEPENDENCIES', payload: viewDependencyKeys});
            this.modelSubscription.unsubscribe();
        }
        this.baseViewHooks.destroyHooks.forEach((hook: {action: Function, arguments?: any[]}) => {
            hook.action.call(this.baseViewHooks.context || this, ...hook.arguments);
        });
    }
}
