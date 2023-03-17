import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import {Payback} from "./components/Payback/Payback";
import {Selection} from "./components/Selection/Selection";
import {Scheme} from "./components/Scheme/Scheme";
import {About} from "./components/About/About";
import {Supplies} from "./components/Supplies/Supplies";
import Footer from "./components/Footer/Footer";
import {Commercial} from "./components/Commercial/Commercial";
import {Home} from "./components/Home/Home";

function App() {
    return (
        <>
            <Menu/>
            {/*<HamburgerMenu/>*/}
            <main role="main">
                <Home/>
                <Payback/>
                <About/>
                <Selection/>
                <Scheme/>
                <Supplies/>
                <Commercial/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
