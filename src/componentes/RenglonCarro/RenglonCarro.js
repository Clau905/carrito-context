
import estilos from  './RenglonCarro.module.css';
import { useContext } from "react";
import {useCarritoContext} from '../../CarritoContext/CarritoContext.js';
import {RiDeleteBin2Fill} from 'react-icons/ri';  
function RenglonCarro(props){
    const {carrito,dispatch}=useCarritoContext();
    const prod={
            categ:props.prod.categ,
            foto:props.prod.foto,
            decripcion : props.prod.desc,
            precio:props.prod.precio,
            codigo:props.prod.foto,
            cant:props.prod.cant,
            stock:props.prod.stock,
            subtot:parseInt(props.prod.cant)*parseFloat(props.prod.precio)

        }
        const cadena = `/img/Joyas/${prod.categ}/${prod.foto}.jpg`;
       
       
    return (

        <div className={estilos.contenedoritem}>
            <div className={estilos.imgcarro}>
            
                <img  className={estilos.imgcarro} 
                src={cadena}
                alt='FOTO 1'  />
   
            </div>
        
        
            <div className={estilos.contenidocodigo}>
                <p>{props.prod.foto} </p>  
                <h3>{props.prod.desc} </h3>  
             
            </div>  
          
            <div className={estilos.contenidoitem}>      
                <p>{props.prod.precio} </p>  
              
            </div>
            <div className={estilos.contenidoitem}>      
                <p>{props.prod.cantidad} </p>  
              
            </div>
            <div className={estilos.contenidoitem}>      
                <p>{props.prod.cantidad*props.prod.precio} </p>  
              
            </div>
            <div className={estilos.eliminar}>
         {/*    <button onClick={removerProd(props.prod)}> < RiDeleteBin2Fill /></button>
 */}            <button > < RiDeleteBin2Fill /></button>
            </div>


        </div>
            );
        
        
        }       
  
export default RenglonCarro;