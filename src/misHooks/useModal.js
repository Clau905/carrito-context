import { useState } from "react";

export const useModal=(inicial = false)=>{
    // mi ventana modal inicialmente estara cerrada
    const [abierto,setAbierto]=useState(inicial);
    const abrirModal=() => {setAbierto(true)};
    const cerrarModal=() => {setAbierto(false)};
    return ([abierto,abrirModal,cerrarModal]);
    }




