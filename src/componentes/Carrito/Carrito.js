import './Carrito.css';

import { FaCartPlus } from "react-icons/fa";

import {CarritoContext} from '../Data/context/CarritoContext';
import { useContext } from "react"; 

function Carrito(){

const {carrito,agregarProd,removerProd,vaciar,estaEnCarrito}=useContext(CarritoContext);
return(     
    <>
        <div style={{display:carrito.total>0?'block':'none'}}>
            <div className='carrito-total'>
                {< FaCartPlus  className="App-logo"   />}  
                <p>${carrito.total} </p>
            </div>
    
        </div>
       
    </>
       
    );

}
export default  Carrito;