import React from 'react'

const Hero = ({ title, imageurl }) => {
    return (
        <div className='hero container'>
            <div className="banner">
                <h2>{title}</h2>
                <p>Welcome to MacBain Hospital, where compassionate care meets innovation. Our advanced Hospital Management System ensures seamless healthcare experiences, prioritizing your well-being with efficiency, personalized treatment, and cutting-edge technology. Every life matters here.</p>
            </div>
            <div className="banner">
                <img src={imageurl} alt="for hero section" className='animated-image' />
                <span><img src="/vector.png" alt="nothing" /></span>
            </div>
        </div>
    )
}

export default Hero
