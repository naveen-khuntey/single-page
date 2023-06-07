import React from 'react'

export default function Header() {
  return (
    <div className='header-body'>
      <div className='title-header'>
        <img src="img/head.png" alt="_the_momo" />
        <p>Abstract</p>
        <p>|</p> 
        <p>Help Center</p>
      </div>
      <div className='header-button'>
        <button className='button1'>Submit a Request</button>
        <button className='button2'>Sign In</button>
      </div>
    </div>
  )
}
