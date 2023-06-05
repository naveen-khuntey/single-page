import React from 'react'
export default function Card() {
  return (
    <div className='card'>
      <div className='card-img'>
        <img src="img/abstract.png" alt="_the_momo" />
      </div>
      <div className='card-desc'>
        <h3>Using Abstract</h3>
        <p>Abstract lets you manage,<br/> version, and document your design in one place</p>
        <a href="/">Learn More -{`>`}</a>
      </div>
    </div>
  )
}
