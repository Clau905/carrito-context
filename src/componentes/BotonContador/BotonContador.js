
import { useState,useContext } from 'react';

import  estilos   from './BotonContador.module.css';
import {FiMinusCircle} from 'react-icons/fi';
import {FiPlusCircle} from "react-icons/fi";
import {CarritoContext} from '../Data/context/CarritoContext.js';

const BotonContador = ({inicial,stock,onAdd}) => {
    //const {carrito,agregarProd,removerProd,vaciar,estaEnCarrito}=useContext(CarritoContext);
    const [cantidadAgregar, setCantidadAgregar] = useState(inicial); 
    const [xcantidad, setCantidad] = useState(inicial); 
    const cant=inicial;
    
    
    
    return (
 
    <div   className={estilos.contenedorBoton}>
        <div className={estilos.contenedorContador}>
                <button  onClick={() =>setCantidad(xcantidad>0? xcantidad - 1 : xcantidad )     }>  {<FiMinusCircle className="App-logo" />}    </button>
                <p> {xcantidad} </p>
                <button  onClick={() => setCantidad(xcantidad<stock?xcantidad+1:xcantidad) }>    {<FiPlusCircle  className="App-logo"   />}      </button>      
        </div>
        <br/><span/>
        <div className= {estilos.agregarCarrito}>
            <div style={{display:!cantidadAgregar>0?'flex':'none'}}>
                <br/>  
                <button className= {estilos.agregarCarrito} onClick={(e)=> onAdd(xcantidad)} >   AGREGAR AL CARRITO </button>
            </div>
        </div>
    
    </div> 
  )
}

export default BotonContador;
