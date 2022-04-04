import React from 'react'

export default function HeroSection() {
    let user = {
        name: 'Julius Regalado',
        email: 'jreg03@outlook.com',
        title: 'Web Dev',
        sector: 'eCommerce',
        linkedinHandle: 'https://www.linkedin.com/in/juliusregalado/'
    }
  return (
    <div className='hero-section'>
      <div className='hero-inner-container'>
          <div className='hero-copy-block'>
            <h1>{user.name}</h1>
            <p>{user.title}</p>
            <a href={user.linkedninHandle}>linkedin.com/in/juliusregalado</a>
          </div>
      </div>
    </div>
    
  )
}
