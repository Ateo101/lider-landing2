import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import Home2 from "./components/Home/Home2";
import {Payback} from "./components/Payback/Payback";
import {Selection} from "./components/Selection/Selection";
import {Scheme} from "./components/Scheme/Scheme";
import {About} from "./components/About/About";
import {Supplies} from "./components/Supplies/Supplies";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Menu/>
            {/*<HamburgerMenu/>*/}
            <main role="main">
                <Home2/>
                <Payback/>
                <Selection/>
                <Scheme/>
                <About/>
                <Supplies/>
                <Selection/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
