import React from 'react';
import '../App.css'


function Card (props) {
  
  let badgeText
  if (props.openSports === 0) {
    badgeText = "Sold Out"
  } else if (props.location === "Online") {
    badgeText = "Online"
  } 


    return (
      <div className='card'>
        {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img src={`./images/${props.coverImg}`} className='card--image' />
        <div className='card--stats'>
          <img src='./images/Star1.png' className='card--star' />
          <span>{props.stats.rating}</span>
          <span className='gray'>({props.stats.reviewCount}) • </span>
          <span className='gray'>{props.location}</span>
        </div>
        <p className='card--title'>{props.title}</p>
        <p className='card--price'>
          <span className='bold'>From ${props.price}</span> / person
        </p>
      </div>
    );
}

export default Card;