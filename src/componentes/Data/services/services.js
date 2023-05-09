import { useContext,useState } from "react"; 
import db from '../../../config/firebase';
import { CarritoContext } from '../context/CarritoContext';
import { Timestamp, writeBatch, } from 'firebase/firestore';

//import 'firebase/database';

import {Adapter} from '../Adapter/Adapter';
import{
    collection,
    updateDoc,
    setDoc,
    getDocs,
    getDoc,
    addDoc,
    query,
    where,
    orderBy,
    doc,
    documentId,
    setData
  }
from 'firebase/firestore';
//const {carrito,vaciar,orden,setOrden }=  useContext(CarritoContext)

export const getProductosById= async(iD)=>{
    const collectionRef =doc(db,'productos', iD) 
    const response =await getDoc(collectionRef)  
    return {
        id: response.id,
        ...response.data()
    }//
}

export const getProds= async(categoria)=>{
   
    const collectionRef = categoria ? query(collection(db,'productos'), where('categ', '==', categoria.trim())) 
    : collection(db,'productos');

    const response =await getDocs(collectionRef)  
    const datosAdaptados=Adapter(response);
    return datosAdaptados 
}  

export  const CrearOrdenDB = async(orden,carrito,vaciar,setOrden,loading,setLoading,setOrderId) => {

  
  console.log('va a crear:' ,orden)
  //setLoading(1);
  const ventas = collection(db,"orders")
  addDoc(ventas, orden)
  .then((resp) => {
    carrito.prods.forEach((item) => {
       const docRef = doc(db, 'productos', item.id)
       getDoc(docRef)
           .then((dbDoc) => {
             updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
          })
   })
  
  setOrderId(resp.id)
 
  vaciar();
  setLoading(2);


})
.catch((error)=> console.log(error))

}