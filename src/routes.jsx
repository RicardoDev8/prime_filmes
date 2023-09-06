
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Favorite from './pages/Favorite';

import Header from './components/Header';

import Erro from './pages/Erro';


export default function AppRoutes(){
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/movies/:id" element={ <Movies/> } />
                    <Route path="/favorite" element={<Favorite/>} />

                    <Route path="*" element={ <Erro/> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
















