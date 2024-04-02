import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    Link,
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
    let location=useLocation()
    let pathArray=location.pathname.split('/').slice(1)
    return (
        <div>
                <Header data={links} />
                <div className="location-nav">
                    <Link to={"/"} style={{fontFamily:"NerdFont"}}>󰋜</Link>
                    {
                    pathArray.map((path:string)=>{
                        return [<div style={{fontFamily:"NerdFont"}}>{'/'}</div>,<Link to={pathArray.slice(0,pathArray.findIndex((string)=>string===path)+1).join('/')} style={{textTransform:'capitalize'}}>{path.replace('-',' ')}</Link>]
                    })   
                    }</div>
                <Routes>
                    <Route path='/articoli/:id' element={<Article />} />
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/contatti' element={<Contatti />}></Route>
                    <Route path='/articoli' element={<Articoli />}></Route>
                    <Route path='/chi-siamo' element={<ChiSiamo />}></Route>
                    <Route path='/materiali' element={<Materiali />}></Route>
                    <Route path='/uds' element={<Home />}></Route>
                    <Route path='/link' element={<Home />}></Route>
                </Routes>
        </div>
    );
}

export default App;
