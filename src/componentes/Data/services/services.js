import { useContext,useState } from "react"; 
import db from '../../../config/firebase';
import { CarritoContext } from '../context/CarritoContext';
import { Timestamp, writeBatch, } from 'firebase/firestore';

//import 'firebase/database';

import {Adapter} from '../Adapter/Adapter';
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
    const datosAdaptados=Adapter(response);
    return datosAdaptados 
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
    updateStock(carrito.prods,adaptados )
   
         
}
catch (error){
        //console.log(error)
        }
finally {
              console.log('finally')
             // setLoading(false);
  }
}


export const updateStock = async (productsInCart, cart) => {

    const batch = writeBatch(db);
    productsInCart.forEach(a => {
        //const productsAdapted = Adapter(doc); ya vienen aaptados
        const stockDb = a.stock;
        const productAddedToCart = cart.find(prod => prod.id === a.id)
        const prodQuantity = productAddedToCart?.quantity;
        console.log('cart carrito ',productsInCart)
        console.log('endb ',cart)
        //bajo la cantidad en stock de acuerdo a lo que se compró de cada producto
        
        
        console.log ('ref id  ',`'${a.id}'`) 
        //const collectionRef =doc(db,'productos', iD) 
        
        const referencia =doc(db,'productos',`'${a.id}'`) 
      
        batch.update(referencia, { stock: stockDb - prodQuantity })
        console.log('commit')
    })
    await batch.commit()
}