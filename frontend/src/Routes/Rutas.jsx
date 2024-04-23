import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import SobreNosotros from '../pages/SobreNosotros/SobreNosotros';
import Navbar from '../components/NavBar/Nav';
import Catalog from '../pages/Catalogo/Catalog';
import Footer from '../components/Footer/footer';
import PlantDetail from '../pages/PlantDetail/PlantDetail';
const Rutas = () => {
    return (
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/catalogo' element={<Catalog/>}/>
                <Route path='/sobre-nosotros' element={<SobreNosotros/>}/>
                <Route path='/detalle-planta' element={<PlantDetail/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        
        
        </>
      );
}
 
export default Rutas;