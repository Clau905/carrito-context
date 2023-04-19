import './Carrito.css';

import { FaCartPlus } from "react-icons/fa";

function Carrito(){


return(
           
        <div className='carrito-total'>

        {< FaCartPlus  className="App-logo"   />}  
           <p>$0  </p>
        </div>

    );

}
export default  Carrito;