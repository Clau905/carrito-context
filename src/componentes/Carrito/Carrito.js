import  estilos  from './Carrito.module.css';
import { FaCartPlus } from "react-icons/fa";
import { CarritoContext } from '../Data/context/CarritoContext';
import { useContext } from "react"; 

function Carrito(){

const {carrito,agregarProd,removerProd,vaciar,estaEnCarrito}=useContext(CarritoContext);
return(     
    <>
        <div style={{display:carrito.total>0?'block':'none'}}>
            <div className={estilos.carritototal}>
                {< FaCartPlus  className="App-logo"  style={{ fontSize: 30 }}  />}  
                <p>${carrito.total} </p>
            </div>
    
        </div>
       
    </>
       
    );

}
export default  Carrito;