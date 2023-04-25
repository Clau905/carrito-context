import './Carrito.css';

import { FaCartPlus } from "react-icons/fa";
import {Link} from 'react-router-dom';
import {useCarritoContext} from '../../CarritoContext/CarritoContext';
import { useContext } from "react"; 

function Carrito(){

    const { carrito, dispatch } = useCarritoContext();
return(     
    <>
        <div style={{display:carrito.total>0?'block':'none'}}>
            <div className='carrito-total'>
                {< FaCartPlus  className="App-logo"   />}  
                <p>${carrito.total} </p>
            </div>
            <div className='vercarro'>
                <Link to={`/pedido`} >Ver Pedido </Link> 
            </div>
        </div>
       
    </>
       
    );

}
export default  Carrito;