import React, { useState } from 'react'
import Styles from './Home.module.scss'
import clsx from 'clsx'
import {
    Link
} from 'react-router-dom'
import { deepMerge } from '@asmotym-ts-workspace/utilities'
import { AppContext } from '../../App'

export type HomeProps = {
    className?: string;
}

export type HomeState = {
    count: number;
}

export function Home(props: HomeProps): JSX.Element {
    const appContext = React.useContext(AppContext)

    // you have access to the global app context here
    console.log('App context', appContext)

    const [state, setState] = useState<HomeState>({
        count: 0,
    })

    function handleCount() {
        const updatedState: Object = { count: state.count + 1 }
        setState((currentState) => deepMerge(currentState, updatedState))
        appContext.state._counter.increment();
        console.log(appContext)
    }

    return (
        <div className={clsx('card', props.className, Styles.Home)}>
            <button onClick={handleCount}>
                count is {appContext.state.count}
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
