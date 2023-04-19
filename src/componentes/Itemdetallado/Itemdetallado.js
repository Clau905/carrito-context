
import { useState,useEffect,useContext } from "react";
import estilos from './Itemdetallado.module.css' 
import {getProductosById} from "../../servicios/asyncMock";
import {CarritoContext} from './CarritoContext/CarritoContext.js';
import {CarritoProvider} from './CarritoContext/CarritoContext.js';
import {FiMinusCircle} from 'react-icons/fi';
import {FiPlusCircle} from "react-icons/fi";
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



  return (
   
    <div>
      <div className={estilos.contenedorCards}>
      {/* <div className={estilos.contenedorDetalle} key={prod.foto}> */}
        <div className={estilos.imagenCards}>
        <img            
        src={ `/img/Joyas/${prod.categ}/${prod.foto}.jpg`}
        alt='FOTO 1'  />
    </div>
    <div className={estilos.texto}>
        <p className={estilos.codigoProd}>{prod.foto} </p>  
        <p className={estilos.desc}>{prod.desc}</p>
        <br></br>
        <p className={estilos.precio}>${prod.precio} </p>  
        <br/>
        <p className={estilos.precio}>Stock: {prod.stock} </p>  
  </div>
  <div className={estilos.contenedorCompra}>
       
      <div className={estilos.contenedorContador}>
          <div className={estilos.stock}>Stock: {prod.stock}</div>
          <button  onClick={() => setCantidad(cantidad>0? cantidad - 1 : cantidad )     }>  {<FiMinusCircle className="App-logo" />}    </button>
                        <p> {cantidad} </p>
          <button  onClick={() => setCantidad(cantidad<prod.stock ? cantidad + 1 : cantidad ) }>    {<FiPlusCircle  className="App-logo"   />}      </button>
      </div>
      
      </div>
      <CarritoProvider>
        <div className= {estilos.contenedorAgregarCarrito} >
                <button onClick={  ()=> agregarProd(prod,cantidad)} >   AGREGAR AL CARRITO </button>
        </div>
        </CarritoProvider>
      </div>
    </div>
   
  )
}

export default Itemdetallado










