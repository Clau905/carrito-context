
import { useState,useContext,useEffect } from "react";
import estilos from './Itemdetallado.module.css' 
import {CarritoContext} from '../Data/context/CarritoContext.js';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import BotonContador from '../BotonContador/BotonContador'
import { getProductosById } from "../Data/services/services";

const Itemdetallado = () => {
  const [cantidad, setCantidad] = useState(0); 
  const {carrito,agregarProd,removerProd,vaciar,estaEnCarrito}=useContext(CarritoContext);
  const iD=useParams(); 
  const [prod,setProd]=useState({})

  useEffect(()=>{ 
    getProductosById(iD).then(producto => {
      console.log('busco el producto ',iD)
      console.log('y encuentra ',producto)
      setProd(producto);
    })
    .catch(err => {
      console.log('errrrrror ',err)
    });

    },[])




    
const agregar=(cant)=>{
   
    setCantidad(cant);
    prod.cantidad=cant;
    agregarProd(prod,cant);
 
  }
  //const categ= prod.categ;
  const volver=()=>{
  
  }

  return (
   
    <div className={estilos.contenedordetalle}>
    
      <div className={estilos.contenedorIzq}> 
        <div className={estilos.volver}> 
            <Link to={`/${prod.categ}`} >Volver </Link> 
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










