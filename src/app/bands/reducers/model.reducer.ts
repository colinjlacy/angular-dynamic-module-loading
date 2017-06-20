import { Action } from '@ngrx/store';

export const SET_MODEL = 'SET_MODEL';
export const REMOVE_DEPENDENCIES = 'REMOVE_DEPENDENCIES';

// Can't AOT const, have to export function
export function model(state: any = {}, action: { type: string, payload?: any } = { type: null }) {
    switch (action.type) {

        case SET_MODEL:
            const val = Object.assign({}, state, { dependencyKeys: Object.keys(action.payload) }, action.payload);
            console.log('state', val);
            return val;

        case REMOVE_DEPENDENCIES:
            let keys = action.payload;
            keys.forEach(key => {
                if (state.dependencyKeys.indexOf(key) === -1) delete state[key];
            });
            return Object.assign({}, state);

        default:
            return state;
    }
};
