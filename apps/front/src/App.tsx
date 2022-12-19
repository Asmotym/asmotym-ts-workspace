import reactLogo from "./assets/react.svg"
import './App.module.scss'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

// import pages
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'

function App() {
    return (
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
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} index element={<Home />} />
                    <Route path={'/login'} element={<Login />} />
                </Routes>
            </BrowserRouter>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
