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
      const inStock = datosAdaptados.filter((item)=> item.stock !== 0)
      return  inStock

}  

export  const CrearOrdenDB = async(orden,carrito, vaciar,loading,setLoading,mensaje,setMensaje) =>{

  setLoading(1);
  
  
  //let mensaje=' ...Se esta generando su pedido';
  
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
 

  
 
  vaciar();
  setLoading(2);
  setMensaje(`Se ha generado la orden ${resp.id}`);


  })
.catch((error)=> console.log(error))

}