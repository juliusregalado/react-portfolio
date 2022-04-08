import React from 'react'

const HeroSection = () => {
    let user = {
        name: 'Julius Regalado',
        title: 'Web Dev'
    }
  return (
    <div className='hero-section'>
        <div className='hero-inner-container'>
            <div className='hero-copy-block'>
                <h1>{user.name}</h1>
                <p>{user.title}</p>
            </div>
        </div>
    </div>
  )
}
export default HeroSection;