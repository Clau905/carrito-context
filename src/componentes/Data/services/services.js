
import db from '../../../config/firebase';

import{
    collection,
    getDocs,
    addDoc,
    query,
    where,
    orderBy,
    doc
}
from 'firebase/firestore';
//import {Adapter} from '../adapters/prodsAdapter'
import { fromDbToApp } from '../adapters/prodsAdapter'


export const getProductosById= async(iD)=>{
    const collectionRef = query(collection(db,'productos'), where( "id", "==", iD)) 
    const response =await getDocs(collectionRef)  
  console.log('en servicios x id ',response.docs.length)   //esta longitud da cero
    const dataAdapted = response.docs.map((doc) => fromDbToApp(doc));
    return dataAdapted;
}
////******************************************** */
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