import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Home2 from "./components/Home/Home2";
import {HamburgerMenu} from "./components/Menu/HamburgerMenu/HamburgerMenu";

function App() {
    return (
        <>
            <Menu/>
            {/*<HamburgerMenu/>*/}
            <main role="main">
                {/*<Home/>*/}
                <Home2/>
                {/*<About/>
                <Skills/>
                <Portfolio/>*/}
                {/*<Contacts/>*/}
                <div style={{height: '100vh', background: 'whitesmoke'}}/>
            </main>
            {/*<Footer/>*/}
        </>
    );
}

export default App;
