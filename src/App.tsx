import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

import Header from "./components/Header/Header";

import "./scss/standard.scss";
import Home from "./pages/Home";
import Contatti from "./pages/Contatti";
import Articoli from "./pages/Articoli";
import ChiSiamo from "./pages/Chi-siamo";
import Materiali from "./pages/Materiali";

let links = [
    {label:'Home',link:'/',id:1},
    {label:'Chi siamo',link:'/chi-siamo',id:2},
    {label:'Contatti',link:'/contatti',id:3},
    {label:'Articoli',link:'/articoli',id:4},
    {label:'Materiali',link:'/materiali',id:5},
    {label:'UDS',link:'/uds',id:6},
    {label:'Link',link:'/link',id:7}
]

function App() {
    return (
        <div>
            <BrowserRouter>
            <Header data={links} />
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
