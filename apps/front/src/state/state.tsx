import Counter from './counter'
import type { CounterState } from './counter'

export type AppState = {
    _counter: CounterState;
    count: number;
}

export default {
    _counter: Counter,
    count: Counter.state.count
} as AppState;