
import {useState,useContext, useEffect} from "react"; 
import {CarritoContext} from '../Data/context/CarritoContext';
import estilos from '../CheckoutForm/CheckoutForm.module.css'
import { Timestamp } from 'firebase/firestore';
import { CrearOrdenDB } from '../Data/services/services';
/* s */

const CheckoutForm = () => {
    const {carrito,vaciar,loading,setLoading}=  useContext(CarritoContext)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [orderId,setOrderId]=useState('');
    const [orden,setOrden]=useState({},[],0,Timestamp.fromDate(new Date()   ) );
  
    function Validar(){
        let mens=''; 
        let datosOk = false   
        if (name.length>0){          
            if (phone.length>0){   
                if (email.length>0) {datosOk=true}
                else { mens='Debe agregarse un Email'}       
            }
            else { mens='El telefono es obligatorio y debe contener solo nros'}
        }   
        else
            { mens='Debe ingresarse un nombre'}
            
        
        if (datosOk===false)
            {alert(mens)}
        return datosOk
    }
    const GuardarOrden=()=> {    
        if (Validar()===true ){ 
    
            // aca esta el ptoblema
            //useState({},[],0, Timestamp.fromDate(new Date()));
            setOrden( {name,phone,email},
              carrito.prods,
               carrito.total,
               Timestamp.fromDate(new Date()) 
            )
            console.log('carrito antes es ',name,carrito)
            console.log('la orden antes es ',orden)
            
            CrearOrdenDB(orden,carrito, vaciar,orden,setOrden,loading,setLoading,setOrderId) 
        } 
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        GuardarOrden();
    }

    return (
        <div className={estilos.content} >
        <h4>Checkout</h4>    
        <form className={estilos.content}  onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Telefono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="mail"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" value="Crear Orden"  >Crear Orden</button>
        </form>

        
        </div>
    )
 
}    
export default CheckoutForm;