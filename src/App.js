
import estilos from './App.module.css';
import Minav from './componentes/Minav/Minav.js';

import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.js';
import Carrito from './componentes/Carrito/Carrito.js';
import ListarPedido from './componentes/ListarPedido/ListarPedido';
import ItemDetallado from './componentes/Itemdetallado/Itemdetallado';
import {CarritoProvider} from './componentes/Data/context/CarritoContext';
import Checkout from './componentes/Checkout/Checkout';
/* import FinOrden from './componentes/FinOrden/FinOrden'; */
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
function App() {
    
  return (
   <>
    
      <CarritoProvider >
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
    
          <Route   path='/item/:iD' element= { <ItemDetallado   /> } />
          <Route   path='/pedido' element= { <ListarPedido  /> } />
          <Route   path='/checkout' element= { <Checkout  /> } />
          <Route   path='/anillos/:borrar' element= {<ItemListContainer  categ = 'anillos'  />} />
        {/*   <Route   path='/finOrden' element= { <FinOrden  /> } /> */}
          </Routes>
          </div>
          </BrowserRouter>
       
       
    </CarritoProvider>
    
    </>
  )   
 }

export default App;
