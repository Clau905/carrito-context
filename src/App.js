
import estilos from './App.module.css';
import Minav from './componentes/Minav/Minav.js';

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.js';
import Carrito from './componentes/Carrito/Carrito.js';
import ListarPedido from './componentes/ListarPedido/ListarPedido';
import ItemDetallado from './componentes/Itemdetallado/Itemdetallado';
import {CarritoProvider} from './CarritoContext/CarritoContext';
import {useCarritoContext} from './CarritoContext/CarritoContext';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import { useContext,useReducer } from "react"; 
function App() {
 
  const [carrito,dispatch] =useContext(useCarritoContext);
  const data=[carrito,dispatch] ;
  return (
   <>
      <CarritoProvider value={data}>
      
        <div className={estilos.cabecera}>
          <h2>Bienvenidos a mi E-commerce</h2>
        </div >
    
       
          <BrowserRouter>  
          <div className={estilos.contenedormenu}>
            <Minav/> <Carrito/> 
          </div>
          <div className={estilos.contendorapp}> 
          <Routes>
          <Route   path="/"           element={ <ItemListContainer  categ = 'anillos'  /> } />
          <Route   path="/anillos"    element={ <ItemListContainer  categ = 'anillos'  /> } />
          <Route   path ='/pulseras'  element={ <ItemListContainer  categ = 'pulseras' /> } />
          <Route   path ='/aros'      element={ <ItemListContainer  categ = 'aros'     /> } />
          <Route   path ='/cadenas'   element={ <ItemListContainer  categ = 'cadenas'  /> } />
    
          <Route   path='/item/:foto' element= { <ItemDetallado  /> } />
          <Route   path='/pedido' element= { <ListarPedido  /> } />

          </Routes>
          </div>
          </BrowserRouter>
       
       
    </CarritoProvider>
    </>
  )   
 }

export default App;
