import React from 'react'
export default function Card({id,url,title,subtitle}) {
  return (
    <div className='card' key={id}>
      <div className='card-img'>
        <img src={url} alt="_the_momo" />
      </div>
      <div className='card-desc'>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <a href="/">Learn More...</a>
      </div>
    </div>
  )
}
