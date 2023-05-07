import estilos from './../Item/Item.module.css';

import { useContext,useEffect } from "react"; 
import {Link} from 'react-router-dom';

const Item =  ({iD,categ,foto, precio,}) =>  {


  return(

        <div className={estilos.contenedorCards}>
         
          <div className={estilos.imagenCards}>
            <img  src= { `/img/Joyas/${categ}/${foto}.jpg`} alt='FOTO 1'  />
          </div>
          <div className={estilos.texto}>
        {/*     <p className={estilos.codigoProd}>{foto} </p>   */}
           {/*  <p className={estilos.desc}>{desc}</p> */}
                <br></br>
            <p className={estilos.precio}>${precio} </p>  
            <br/>
            {/* <p className={estilos.precio}>Stock: {stock} </p>   */}
          </div>
          <div  className={estilos.botonDetalle}>
        
            <Link to={`/item/${iD}`} >Ver detalle </Link> 
          </div>
         
        </div>  
    
    
)
}

export default Item;  
