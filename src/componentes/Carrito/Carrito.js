import  estilos  from './Carrito.module.css';
import { FaCartPlus } from "react-icons/fa";
import { CarritoContext } from '../Data/context/CarritoContext';
import { useContext } from "react"; 
import {Link} from 'react-router-dom';
function Carrito(){

const {carrito,agregarProd,removerProd,vaciar,estaEnCarrito}=useContext(CarritoContext);
return(     
    <>
        <div style={{display:carrito.total>0?'block':'none'}}>
            <div className={estilos.carritototal}>
            <Link to={`/pedido`} >    {< FaCartPlus  className="App-logo"  style={{ fontSize: 30 }}  />}  </Link>
                <p>${Math.round(carrito.total)} </p>
            </div>
    
        </div>
       
    </>
       
    );

}
export default  Carrito;