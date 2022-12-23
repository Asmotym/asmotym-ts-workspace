import reactLogo from "./assets/react.svg"
import './App.module.scss'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import type { Router } from '@remix-run/router'
import React from 'react'
import state, {AppState} from './state/state'

// import pages
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'

declare type DefaultAppContext = {
    theme: string;
    router: Router;
    state: AppState;
}

export const AppContext = React.createContext({} as DefaultAppContext)

export default function App() {
    const defaultAppContext: DefaultAppContext = {
        theme: 'light',
        router: createBrowserRouter([
            {
                id: 'home',
                path: '/',
                element: <Home />,
                index: true,
            },
            {
                id: 'login',
                path: '/login',
                element: <Login />,
            }
        ]),
        state: state,
    }

    return (
        <AppContext.Provider value={defaultAppContext}>
            <div className="App">
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src="/vite.svg" className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://reactjs.org" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <RouterProvider router={defaultAppContext.router}/>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div>
        </AppContext.Provider>
    )
}
