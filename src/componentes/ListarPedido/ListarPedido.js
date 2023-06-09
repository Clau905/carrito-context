
import estilos from  './ListarPedido.module.css';
import RenglonCarro from  '../RenglonCarro/RenglonCarro';
import { useContext } from "react";
import {Link} from 'react-router-dom';
import {CarritoContext} from '../Data/context/CarritoContext';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

function ListarPedido(){
    const {carrito}=useContext(CarritoContext);
      
       return (
        <>
        <div style={{display:!carrito.total>0?'block':'none'}}>
        <ItemListContainer  categ = 'anillos'  /> 
        </div>


        <div  className={estilos.contenedorcarro}   style={{display:carrito.total>0?'block':'none'}}  >  
            <div className={estilos.carrosuperior}   >
               <p className={estilos.carroFoto}>Foto</p> <p>Codigo</p>  <p className={estilos.desc}>Descripcion</p> <p className={estilos.precio}>Precio </p> <p className={estilos.cant}>Cant.</p><p className={estilos.subtotal}>Subt.</p>  
            </div>
            <div className= {estilos.carrodetalle}>
                    
                    {carrito.prods.map( (it) => <RenglonCarro   key={it.id}  prod= {it}    >       </RenglonCarro>   ) }
        
            </div>
            <div className= {estilos.resumen}>
           
                <div className={estilos.total}>
                    <p>Total Pedido: $ {Math.round(carrito.total)}</p>
                </div>
                <div className={estilos.checkout}>
                    <Link to={`/anillos/borrar`} >Vaciar Carro </Link>  
                    <Link to={`/checkout`} >Checkout </Link>
                </div> 
            </div>
    
           
        </div>
    </>
    )
}    
  
export default ListarPedido;
