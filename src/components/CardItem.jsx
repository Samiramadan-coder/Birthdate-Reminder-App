import React from 'react';

const CardItem = ({img, name, age}) => {
  return (
    <article className='card-item'>
      <div className='img'>
        <img src={img} alt={name} />
      </div>
      <div className='info'>
        <h4>{name}</h4>
        <h5>{age} years</h5>
      </div>
    </article>
  )
}

export default CardItem;