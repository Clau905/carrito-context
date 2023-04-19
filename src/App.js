
import estilos from './App.module.css';
import Minav from './componentes/Minav/Minav.js';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.js';
import Carrito from './componentes/Carrito/Carrito.js';
import ItemDetallado from './componentes/Itemdetallado/Itemdetallado';
import {CarritoProvider} from '../CarritoContext/CarritoContext.js';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
function App() {

  return (
   <>
      <CarritoProvider>
      <div className={estilos.cabecera}>
        <h2>Bienvenidos a mi E-commerce</h2>
      </div>
      <div className={estilos.navsuperior}>
        <BrowserRouter>  
        <Minav/>     <Carrito></Carrito>   
        <Routes>
        <Route   path="/"           element={ <ItemListContainer  categ = 'anillos'  /> } />
        <Route   path="/anillos"    element={ <ItemListContainer  categ = 'anillos'  /> } />
        <Route   path ='/pulseras'  element={ <ItemListContainer  categ = 'pulseras' /> } />
        <Route   path ='/aros'      element={ <ItemListContainer  categ = 'aros'     /> } />
        <Route   path ='/cadenas'   element={ <ItemListContainer  categ = 'cadenas'  /> } />
   
        <Route   path='/item/:foto' element= { <ItemDetallado  /> } />
        </Routes>
        </BrowserRouter>
    </div> 
    </CarritoProvider>
    </>
  )   
 }

export default App;
