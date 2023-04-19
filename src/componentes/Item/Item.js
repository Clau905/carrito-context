import estilos from './../Item/Item.module.css';
import {Link} from 'react-router-dom';


const Item =  ({categ,foto,desc, precio,stock}) => {
 
  return(

   
        <div className={estilos.contenedorCards}>
         
          <div className={estilos.imagenCards}>
            <img  src= { `/img/Joyas/${categ}/${foto}.jpg`} alt='FOTO 1'  />
          </div>
          <div className={estilos.texto}>
            <p className={estilos.codigoProd}>{foto} </p>  
            <p className={estilos.desc}>{desc}</p>
                <br></br>
            <p className={estilos.precio}>${precio} </p>  
            <br/>
            <p className={estilos.precio}>Stock: {stock} </p>  
          </div>
          <div  className={estilos.botonDetalle}>
        
            <Link to={`/item/${foto}`} >Ver detalle </Link> 
          </div>
         
        </div>  
    
    
)
}

export default Item;  
