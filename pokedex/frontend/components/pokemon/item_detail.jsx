import React from 'react';

const ItemDetail = ({id, item}) => {
  return (
    <div className="item-detail-container">
      <h3>{item.name}</h3>
      <h4>Happiness: {item.happiness}</h4>
      <h4>Price: {item.price}</h4>
    </div>
  );
};


export default ItemDetail;
