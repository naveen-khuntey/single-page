import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-child'>
        <h3>Abstract</h3>
        <p><a href='/'>Start Trial</a></p>
        <p><a href='/'>Pricing</a></p>
        <p><a href='/'>Download</a></p>
      </div>
      <div className='footer-child'>
        <h3>Resources</h3>
        <p><a href='/'>Help Center</a></p>
        <p><a href='/'>Release Notes</a></p>
        <p><a href='/'>Status</a></p>
      </div>
      <div className='footer-child'>
        <h3>Community</h3>
        <p><a href='/'>Twitter</a></p>
        <p><a href='/'>LinkedIn</a></p>
        <p><a href='/'>Facebook</a></p>
        <p><a href='/'>Dribble</a></p>
        <p><a href='/'>Podcast</a></p>
      </div>
      <div className='footer-child'>
        <h3>Company</h3>
        <p><a href='/'>About Us</a></p>
        <p><a href='/'>Careers</a></p>
        <p><a href='/'>Legal</a></p>
        <h4>Contact Us</h4>
        <p><a href="mailto:info@abstract.com">info@abstract.com</a></p>
      </div>
      <div className='last-footer footer-child'>
        <img src="img/head.png" alt="_the_momo" />
        <p>© Copyright 2023</p>
        <p>All rights reserved</p>
      </div>
    </div>
  )
}
