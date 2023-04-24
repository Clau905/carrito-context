
import { useState,useEffect,useContext } from "react";
import estilos from './Itemdetallado.module.css' 
import {getProductosById} from "../../servicios/asyncMock";
import {CarritoContext} from '../../CarritoContext/CarritoContext.js';

import {FiMinusCircle} from 'react-icons/fi';
import {FiPlusCircle} from "react-icons/fi";

import {AiFillBackward} from "react-icons/ai";

import { useParams } from "react-router-dom";

const Itemdetallado = () => {
  const [prod,setProd]=useState([]);
  const [cantidad, setCantidad] = useState(0);
  const {foto}=useParams(); 
  const {carrito,agregarProd,removerProd,vaciar,estaEnCarrito}=useContext(CarritoContext);
 /*

  mi carrito es un objeto
  {prods[],total} 
  prods es un array

  } */
 
 
  useEffect(()=>{
      getProductosById(foto)
        .then(response =>{setProd(response)
     
        })
        .catch(error =>{
              console.log("error ",error)
        })
  },[foto]) 

  const miProd={

    categ:prod.categ,
    foto:prod.foto,
    desc:prod.desc,
    precio:prod.precio,
    stock :prod.stock,
    cantidad:0
  }

  return (
    <div className={estilos.contenedordetalle}>
    
      <div className={estilos.contenedorIzq}> 
        <div className={estilos.volver}> 
          <button>  {< AiFillBackward className="App-logo" style={{ fontSize: 30 }} />} </button>
          <p>Volver</p>
        </div>
        <div className={estilos.imagenCards}>
          <img            
          src={ `/img/Joyas/${prod.categ}/${prod.foto}.jpg`}
          alt='FOTO 1'  />
        </div>
      </div>

      <div className={estilos.contenedorDer}>
        <div className={estilos.contenedorCompra}>
          <div className={estilos.texto}>
            <p className={estilos.titu}>{prod.desc}</p>
            <p className={estilos.precio}>${prod.precio} </p>  
          </div>
        
          <div className={estilos.renglon}>
            
            <div className={estilos.stock}>
              <h3> Stock: {prod.stock}</h3> <p>Cantidad</p>
            </div>
        
            <div className={estilos.contenedorContador}>
              <button  onClick={() => setCantidad(cantidad>0? cantidad - 1 : cantidad )     }>  {<FiMinusCircle className="App-logo" />}    </button>
              <p> {cantidad} </p>
              <button  onClick={() => setCantidad(cantidad<prod.stock?cantidad+1:cantidad) }>    {<FiPlusCircle  className="App-logo"   />}      </button>      
            </div>
          </div>
        </div>
        <div className= {estilos.contenedorAgregarCarrito} >
            <button onClick={  ()=> agregarProd(miProd,cantidad)} >   AGREGAR AL CARRITO </button>
        </div>
      
      
        <div className= {estilos.etiqueta} >
          <p >MATERIAL: </p>
          <p className={estilos.material}>Plata 925 </p> 
        </div> 
        <div className= {estilos.etiqueta} >
          <p >CODIGO: </p>
          <p className={estilos.material}>{prod.foto} </p> 
        </div> 


      </div>


       
    </div>  
 
  )
}

export default Itemdetallado










