import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import Home2 from "./components/Home/Home2";
import {Payback} from "./components/Payback/Payback";
import {Selection} from "./components/Selection/Selection";

function App() {
    return (
        <>
            <Menu/>
            {/*<HamburgerMenu/>*/}
            <main role="main">
                <Home2/>
                <Payback/>
                <Selection/>
                <div style={{height: '100vh', background: 'whitesmoke'}}/>
            </main>
            {/*<Footer/>*/}
        </>
    );
}

export default App;
