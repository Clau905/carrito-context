
import db from '../../../config/firebase';

import{
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



const citiesRef = collection(db, "cities");
export const guardarOrden= async()=>{
    await setDoc(doc(citiesRef, "BJ"), {
        name: "Beijing", state: null, country: "China",
        capital: true, population: 21500000,
        regions: ["jingjinji", "hebei"] });
    }
