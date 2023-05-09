
import estilos from  './Minav.module.css';
import {Link} from 'react-router-dom';
function Minav(){
    return (
        <div className={estilos.contenedorlink}  >
          
            
                <Link to={'/anillos'}> Anillos</Link>
                <Link to={'/aros'}> Aros</Link>
                <Link to={'/pulseras'}> Pulseras</Link>
                <Link to={'/cadenas'}> Cadenas</Link>
       
            
        </div>
    )  

}
export default Minav;
