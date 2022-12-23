import { deepMerge } from 'basx'

export type CounterStateType = {
    count: number;
}

export type CounterDispatcherType = 'increment' | string;

export type CounterState = {
    state: CounterStateType;
    dispatch: (type: CounterDispatcherType) => void;
    increment: () => void;
}

const defaultState = {
    count: 0
}

let state: CounterStateType = defaultState

function dispatcher(type: CounterDispatcherType): CounterStateType {
    switch (type) {
        case 'increment':
            return deepMerge(state, {
                count: state.count + 1
            })
        default: break;
    }

    return state;
}

function dispatch(type: CounterDispatcherType): void {
    state = dispatcher(type);
}

export default {
    state,
    dispatch,
    increment() {
        dispatch('increment')
    }
}