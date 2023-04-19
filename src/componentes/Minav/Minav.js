
import estilos from  './Minav.module.css';
import {Link} from 'react-router-dom';
function Minav(){
    return (
        <Link className={estilos.contenedorLink}  >
        
           <Link to={'/anillos'}> Anillos</Link>
           <Link to={'/aros'}> Aros</Link>
           <Link to={'/pulseras'}> Pulseras</Link>
           <Link to={'/cadenas'}> Cadenas</Link>
        </Link>
    )
}    
  
       
   
export default Minav;
