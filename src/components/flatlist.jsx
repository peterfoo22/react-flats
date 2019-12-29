import React from 'react';
import Flat from './flat';


const FlatList = (props) => {

  return (
    <div>
      { props.listofFlats.map((flat)=> <Flat id={flat.id}
              key={flat.id}
              src = {flat.imageUrl}
              selectGif={props.selectGif} /> )}
    </div>
  );
}

export default FlatList;
