import React, {useState} from 'react';
//import firebase from 'firebase';
import estilos from '../CheckoutForm/CheckoutForm.module.css'
const CheckoutForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();;
/* 
        const db = firebase.firestore();
        db.collection('users').add({
            name,
            email,
            phone
        })
        .then(() => {
            alert('Datos guardados correctamente');
            setName('');
            setSurname('');
            setEmail('');
            setDni('');
        })
        .catch(error => {
            console.log(error);
        }); */
    }

    return (
        <div className={estilos.content} >
        <h4>Checkout</h4>    
        <form className={estilos.content}  onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={name}
                onBlur={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Telefono"
                value={phone}
                onBlur={(e) => setPhone(e.target.value)}
            />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onBlur={(e) => setEmail(e.target.value)}
            />
           
            <button type="submit" value="Crear Orden" >Crear Orden</button>
        </form>
    </div>
    
    )
}

export default CheckoutForm;