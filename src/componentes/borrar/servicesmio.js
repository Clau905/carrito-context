import { useContext,useState } from "react"; 
import db from '../../config/firebase';
import { CarritoContext } from '../context/CarritoContext';
import { Timestamp, writeBatch, } from 'firebase/firestore';
import * as firebase from 'firebase/app';
import 'firebase/database';
import{
    collection,
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
//import {Adapter} from '../adapters/prodsAdapter'
//import { fromDbToApp } from '../../_BORRAR/adapters/prodsAdapter'

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
    const lista= response.docs.map((producto) =>{
        return {
            id:producto.id,
             ...producto.data()    

        }
   
        })
    return lista  
    

}



export  const Crear = async(orden,carrito) => {
 

  //const [orderId,setOrderId] = useState('');

  //const [loading,setLoading] = useState(false);

  //setLoading(true);

  try { 
      const batch =async()=>{ writeBatch(db)};

      const outOfStock = [];
      const productsRef= collection(db,'productos');
      // aqui busco los id de los documentos de mi carrito
      const ids = carrito.prods.map(prod=>prod.id)
      // traigo solo los productos de dB que contengan los Ids (del carrito)
      const q = query(collection(db, "productos"), where(documentId(),'in', ids));
      const lista = await getDocs(q);
      
      // ahora adapto los resultados
      const adaptados = lista.docs.map((producto) =>{
        return {
            id:producto.id,
             ...producto.data()    

        }
      })
              

      //actualiza stock
      
      adaptados.forEach(doc => {
        
        // const dataDoc = doc.data();
        const stockDb= doc.stock;
        const busco = carrito.prods.find(prod => prod.id === doc.id);
        const resto = busco.cantidad;
        if (stockDb>= resto){
            console.log('va a restar ',doc.desc,resto)     
            const refProducto = firebase.database().ref(doc.id);
            refProducto.update({
              stock: stockDb-resto
            });
                      
            
             console.log(' resto a ',doc.desc,resto)     
        }
        else{
                outOfStock.push({id:doc.id,...doc})
        }

        if (outOfStock.length===0){
              batch.commit();
              const orderRef = collection(db,'ordenes');
              const ordenAg =  addDoc(orderRef,orden);
              return (ordenAg.id);
              //vaciar();
        }
        else{
              console.log('No hay productos fuera de stock')
        }
      })
  }
  catch (error){
          //console.log(error)
          }
  finally {
          console.log('finally')
         // setLoading(false);
  }
}
import { writeBatch } from "firebase/firestore";
import { productsAdapter } from "../adapters/productsAdapter";
import db from "./firebase/firebaseConfig";

export const updateStock = async (productsInCart, cart) => {
    const batch = writeBatch(db);
    productsInCart.forEach(doc => {
        const productsAdapted = productsAdapter(doc);
        const stockDb = productsAdapted.stock
        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity
        //bajo la cantidad en stock de acuerdo a lo que se compró de cada producto
        batch.update(doc.ref, { stock: stockDb - prodQuantity })
    })
    await batch.commit()
}