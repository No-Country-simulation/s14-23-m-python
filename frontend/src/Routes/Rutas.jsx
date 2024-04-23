import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import SobreNosotros from '../pages/SobreNosotros/SobreNosotros';
import Navbar from '../components/NavBar/Nav';
import Catalog from '../pages/Catalogo/Catalog';

const Rutas = () => {
    return (
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/catalogo' element={<Catalog/>}/>
                <Route path='/sobre-nosotros' element={<SobreNosotros/>}/>
            </Routes>
        </BrowserRouter>
        
        
        </>
      );
}
 
export default Rutas;