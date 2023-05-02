
import { useState,useEffect,useContext } from "react";
import estilos from './Itemdetallado.module.css' 

import {CarritoContext} from '../Data/context/CarritoContext.js';

import {Link} from 'react-router-dom';

import {AiFillBackward} from "react-icons/ai";

import { useParams } from "react-router-dom";
import BotonContador from '../BotonContador/BotonContador'
import { ProductContext } from "../Data/context/ProductContext";

const Itemdetallado = () => {
  const [cantidad, setCantidad] = useState(0); 
  const [prod, setProd] = useState({});
  const {foto}=useParams(); 
  
 /*

  mi carrito es un objeto
  {prods[],total} 
  prods es un array

  
  } */
  const {carrito,agregarProd,removerProd,vaciar,estaEnCarrito}=useContext(CarritoContext);
 const {getProds,getProductosById}= useContext(ProductContext);
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

  const agregar=(cant)=>{
  
    setCantidad(cant);
    miProd.cantidad=cant;
    agregarProd(miProd,cant);
  
  
  }

  const volver=()=>{
  
  }

const categ= prod.categ;

console.log(' vuelvo al\  la catego ',categ)
  return (
    <div className={estilos.contenedordetalle}>
    
      <div className={estilos.contenedorIzq}> 
        <div className={estilos.volver}> 
        <Link to={`/${categ}`} >Volver </Link> 
       {/*     {< AiFillBackward className="App-logo" style={{ fontSize: 30 }} />}  */}
         
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
        

            
            <div className={estilos.stock}>
              <p> Stock: {prod.stock}</p>
            </div>
            <div className={estilos.cantidad}>
               <p>Cantidad</p>
            </div>
        
          <div     style={{display:!cantidad>0?'flex':'none'}}>  
            <BotonContador 
              inicial={0}   stock={prod.stock}  onAdd={agregar}/>
          </div>   
        
        </div>


        <div  style={{display:cantidad>0?'block':'none'}}>
            
            { <Link to={`/pedido`} >FINALIZAR COMPRA </Link>   }
    
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










