
import estilos from  '../../componentes/Carro/Item.module.css';

import {  RiDeleteBin2Fill} from 'react-icons/ri';  
function Item(props){
    const prod={
            foto:props.prod.foto,
            decripcion : props.prod.desc,
            precio:props.prod.precio,
            codigo:props.prod.foto,
            cant:props.prod.cant,
            stock:props.prod.stock,
            subtot:parseInt(props.prod.cant)*parseFloat(props.prod.precio)
        }
       
    return (

        <div className={estilos.contenedoritem}>
            <div className={estilos.imgcarro}>
    
                <img  className={estilos.imgcarro}  src={require(`../../img/${props.prod.foto}.jpg`)}
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
                <p>{props.prod.cant} </p>  
              
            </div>
            <div className={estilos.contenidoitem}>      
                <p>{prod.subtot} </p>  
              
            </div>
        
            <h2>
            < RiDeleteBin2Fill /></h2>


        </div>
            );
        
        
        }       
  
export default Item;