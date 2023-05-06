import { useState,useEffect } from 'react';
import { FaCartPlus } from "react-icons/fa";
import estilos from '../ItemListContainer/ItemListContainer.module.css';
import {CarritoContext} from '../Data/context/CarritoContext.js';
import { useContext } from "react"; 
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Timestamp, writeBatch, } from 'firebase/firestore';
import db from '../../config/firebase'


import{
  documentId,
  collection,
  setDoc,
  getDocs,
  getDoc,
  addDoc,
  query,
  where,
  orderBy,
  doc
}
from 'firebase/firestore';
import { getProds } from '../Data/services/services';



const Checkout = () => {

  const [loading,setLoading]=useState(false);
  const [orderId,setOrderId]=useState('');
  const {carrito,vaciar }=  useContext(CarritoContext)

  const createOrder = async({nombre,phone,email}) =>{
  setLoading(true);
  try { 
    const objOrden={
          comprador:{nombre,phone,email},
          items:carrito.prods,
          total:carrito.total,
          fecha: Timestamp.fromDate(new Date())
    }
    const  batch =async()=>{ writeBatch(db)};
    const outOfStock = [];
    const productsRef= collection(db,'productos');
    const ids = carrito.prods.map(prod=>prod.id)
  //const adaptados = await getDocs(query,productsRef,where(documentId(),'in', carrito.prods)).data();
    
    const adaptados = await getDocs(query,productsRef,where(documentId(),'in')).data();
    const  { docs } = adaptados;

    docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockDb= adaptados?.cantidad;
        if (stockDb>=carrito.prods.cantidad) {
          batch.update(doc.ref,{stock:stockDb-carrito.prods.cantidad})
        }
        else{
          outOfStock.push({id:doc.id,...dataDoc})
        }
        if (outOfStock.length===0){
            batch.commit();
            const orderRef = collection(db,'ordenes')
            const ordenAg =  addDoc(orderRef,objOrden)
            setOrderId(ordenAg.id)
            vaciar();
        }
        else{
            console.log('No hay productos fuera de stock')

        }
    })
    }
    catch (error){
      console.log(error)
      }
    finally {
      setLoading(false);
    }
  }


  if(loading){
      return <h2> SE ESTA GENERANDO SU ORDEN ...</h2>
  }
  if(orderId){
    return <h2> SU ORDEN es: {orderId} </h2>
  }


  return(

      <div>  
        <div className={estilos.carritototal}>
                {< FaCartPlus  className="App-logo"  style={{ fontSize: 30 }}  />}  
                <p>${carrito.total} </p>
            </div>
        <CheckoutForm onConfirm= {createOrder}/>
      </div>


    ) 
}
export default Checkout
