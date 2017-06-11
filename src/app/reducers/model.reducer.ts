import { Action } from '@ngrx/store';

export const SET_MODEL = 'SET_MODEL';

export const model = (state: any = {}, action: {type: string, payload?: any} = {type: null}) => {
    switch (action.type) {

        case SET_MODEL:
            state = Object.assign({}, state, action.payload);
            console.log('state', state);
            return state;

        default:
            return state;
    }
};
