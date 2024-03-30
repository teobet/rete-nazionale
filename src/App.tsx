import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

import Header from "./components/Header/Header";

import "./scss/standard.scss";
import Home from "./pages/Home/Home";
import Contatti from "./pages/Contatti";
import Articoli from "./pages/Articles/Articoli";
import ChiSiamo from "./pages/Chi-siamo";
import Materiali from "./pages/Materiali";
import Article from "./pages/Article/Article";

let links = [
    { src: 'Home', link: '/', id: 1 },
    { src: 'Chi siamo', link: '/chi-siamo', id: 2 },
    { src: 'Contatti', link: '/contatti', id: 3 },
    { src: 'Articoli', link: '/articoli', id: 4 },
    { src: 'Materiali', link: '/materiali', id: 5 },
    { src: 'uds', link: '/uds', id: 6, image: true },
    { src: 'link', link: '/link', id: 7, image: true }
]

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header data={links} />
                <Routes>
                    <Route path='/articolo/:id' element={<Article />} />
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
