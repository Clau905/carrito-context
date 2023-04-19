import React from 'react';
import Item from '../Item/Item';

import estilos from '../ItemList/Itemlist.module.css'
const Itemlist = ({prods,categ}) => {

  

  return (
    <div className={estilos.contenedorcarro}>
      {prods.map(prod=> <Item key={prod.id} categ={prod.categ} foto={prod.foto} precio={prod.precio} stock={prod.stock}/>)}
    </div>
    
  )
}

export default Itemlist
