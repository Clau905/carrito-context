
import {useState,useContext, useEffect} from "react"; 
import { CarritoContext } from '../Data/context/CarritoContext';
import estilos from '../CheckoutForm/CheckoutForm.module.css'
//import db from '../../config/firebase';
import { Timestamp, writeBatch, } from 'firebase/firestore';
import { Crear } from '../Data/services/services';
/* import{
    collection,
    setDoc,
    getDocs,
    getDoc,
    addDoc,
    query,
    where,
    orderBy,
    doc,
    documentId
  }
from 'firebase/firestore';
//import {GuardarOrden } from '../Data/services/services'; */


const CheckoutForm = () => {
    const {carrito,vaciar,orden,setOrden }=  useContext(CarritoContext)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
   // const [datosOk,setDatosOk]= useState(false);

   
     const  GuardarOrden=()=> {
        setOrden({
            comprador:{name,phone,email},
            items:carrito.prods,
            total:carrito.total,
            fecha: Timestamp.fromDate(new Date())
        })
        console.log('Mi Orden ',orden);
       
         Crear(orden,carrito)
    }
     
    const handleSubmit = (e) => {
        
        e.preventDefault();
    
        let datosOk=false;
        let mens='';
           
        if (name.length>0){          
            if (phone.length>0){   
                if (email.length>0){   
                        datosOk=true
                }else
                    { mens='Debe agregarse un Email'}
                }else
                { mens='El telefono es obligatorio y debe contener solo nros'}
            }
            else
                { mens='Debe ingresarse un nombre'
            }
        
            if (datosOk===false){alert(mens)
            }
       
        if (datosOk===true){
            GuardarOrden();
        }else{
          
        }
       
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