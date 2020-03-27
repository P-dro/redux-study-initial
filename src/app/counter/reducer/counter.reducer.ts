import { createReducer, on, createSelector } from '@ngrx/store';

import { increment, decrement, reset } from './counter.actions';
import { initialState } from './counter.state';

const _counterReducer = createReducer(initialState,
    on(increment, (state) => Object.assign({}, state, { counter: state.counter + 1 })),
    on(decrement, (state) => {
        if (state.counter > 0)
            return Object.assign({}, state, { counter: state.counter - 1 });
        else
            return Object.assign({}, state, { counter: 0 });
    }),
    on(reset, (state) => Object.assign({}, state, { counter: 0 }))
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}

export const selectFeature = (state) => state.count;

export const selectCounter = createSelector(
    selectFeature,
    (state) => state.counter
);


