import React from 'react';
import Flat from './flat';


const FlatList = (props) => {

  return (
    <div className = "flat-list" >
      { props.listofFlats.map((flat)=> <Flat id={flat.id}
              key={flat.id}
              src = {flat.imageUrl}
              selectaFlat={props.selectaFlat}
              name = {flat.name}
              price = {flat.price}
              /> )}
    </div>
  );
}

export default FlatList;
