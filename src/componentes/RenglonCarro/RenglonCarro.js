
import estilos from  './RenglonCarro.module.css';
import { useContext } from "react";
import {CarritoContext} from '../Data/context/CarritoContext';
import {RiDeleteBin2Fill} from 'react-icons/ri';  
function RenglonCarro(props){
    const {carrito,agregarProd,removerProd,vaciar,estaEnCarrito}=useContext(CarritoContext);
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
               
             
            </div>  

            <div className={estilos.contenidoprecio}>      
                <p>{props.prod.desc} </p>  
              
            </div>


   
            <div className={estilos.contenidoprecio}>      
                <p>${props.prod.precio} </p>  
              
            </div>
            <div className={estilos.contenidocant}>      
                <p>{props.prod.cantidad} </p>  
              
            </div>
            <div className={estilos.contenidoitem}>      
                <p>${Math.round(props.prod.cantidad*props.prod.precio)} </p>  
              
            </div>
            <div className={estilos.eliminar}>
            <button onClick={(e) => removerProd(e, props.prod, props.prod.cantidad)}> < RiDeleteBin2Fill  style={{ fontSize: 30 }}/></button>
            </div>


        </div>
            );
        
        
        }       
  
export default RenglonCarro;