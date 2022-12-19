import React, { useState } from 'react'
import Styles from './Home.module.scss'
import clsx from 'clsx'
import {
    Link
} from 'react-router-dom'
import { deepMerge } from 'basx'

export type HomeProps = {
    className?: string;
}

export type HomeState = {
    $container: React.RefObject<HTMLDivElement>;
    count: number;
}

export function Home(props: HomeProps): JSX.Element {
    const [state, setState] = useState<HomeState>({
        $container: React.createRef<HTMLDivElement>(),
        count: 0,
    })

    function handleCount() {
        const updatedState: Object = { count: state.count + 1 }
        setState((currentState) => deepMerge(currentState, updatedState))
    }

    return (
        <div
            className={clsx('card', props.className, Styles.Home)}
            ref={state.$container}
        >
            <button onClick={handleCount}>
                count is {state.count}
            </button>
            <br /><br />


            <Link to='/login' >
                <button>Log-in</button>
            </Link>

            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
    )
}
