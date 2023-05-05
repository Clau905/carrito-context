import React, {useState} from 'react';
import firebase from 'firebase';

const Form = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [dni, setDni] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const db = firebase.firestore();
        db.collection('users').add({
            name,
            surname,
            email,
            dni
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
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Apellido"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
            />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="DNI"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
            />
            <input type="submit" value="Enviar" />
        </form>
    )
}

export default Form;