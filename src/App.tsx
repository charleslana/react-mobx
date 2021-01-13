import React from 'react';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/nav-bar/NavBar";
import Routes from "./routes/Routes";
import './assets/layout/fonts/Roboto/font.css';
import './assets/layout/main.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <hr/>
                <Routes/>
            </BrowserRouter>
        </div>
    );
}

export default App;
