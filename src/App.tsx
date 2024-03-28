import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import './index.css';
import Header from './components/Header';

import './App.css';
import Home from "./components/Home";
import React from "react";
import Contatti from "./components/Contatti";
import Articoli from "./components/Articoli";
import ChiSiamo from "./components/Chi-siamo";
import Materiali from "./components/Materiali";

let links=[
    {label:'Home',link:'',id:1},
    {label:'Chi siamo',link:'chi-siamo',id:2},
    {label:'Contatti',link:'contatti',id:3},
    {label:'Articoli',link:'articoli',id:4},
    {label:'Materiali',link:'materiali',id:5},
    {label:'UDS',link:'uds',id:6},
    {label:'Link',link:'link',id:7}
]

function App() {
    const [height, setHeight] = React.useState(0)
    return (
        <div>
            <Header data={links} callback={setHeight}></Header>
            <div style={{ height: height, width: "100vw" }}></div> {/* situa per spaziare i 'body' dall'header */}

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/contatti' element={<Contatti />}></Route>
                    <Route path='/articoli' element={<Articoli />}></Route>
                    <Route path='/chi-siamo' element={<ChiSiamo />}></Route>
                    <Route path='/materiali' element={<Materiali />}></Route>
                    <Route path='/uds' element={<Home />}></Route>
                    <Route path='/link' element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
