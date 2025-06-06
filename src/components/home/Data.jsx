import React from 'react'

const Data = () => {
  return (
    <div className='home__data'>
        <h1 className="home__title">Geson Kachappilly
        <picture className='home__hand'>
          <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp" />
          <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" width="38" height="38" />
        </picture>
        </h1>
        
        <h3 className="home__subtitle">Software Developer</h3>
        <p className="home__description">I am a passionate Sofware Developer with a knack for creating dynamic and responsive applications.</p>
        <a href="#contact" className="button button--flex">
            Contact Me
            <svg 
                className="prefix__button__icon" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24"
                height="24" 
                fill="none">
                <path d="M14.22 21.935c-1.18 0-2.85-.83-4.17-4.8l-.72-2.16-2.16-.72c-3.96-1.32-4.79-2.99-4.79-4.17 0-1.17.83-2.85 4.79-4.18l8.49-2.83c2.12-.71 3.89-.5 4.98.58 1.09 1.08 1.3 2.86.59 4.98l-2.83 8.49c-1.33 3.98-3 4.81-4.18 4.81zm-6.58-14.6c-2.78.93-3.77 2.03-3.77 2.75 0 .72.99 1.82 3.77 2.74l2.52.84c.22.07.4.25.47.47l.84 2.52c.92 2.78 2.03 3.77 2.75 3.77.72 0 1.82-.99 2.75-3.77l2.83-8.49c.51-1.54.42-2.8-.23-3.45-.65-.65-1.91-.73-3.44-.22l-8.49 2.84z" fill='var(--container-color)'/>
                <path d="M10.11 14.705c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3.58-3.59c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.58 3.59c-.14.15-.34.22-.53.22z" fill="var(--container-color)"/>
            </svg>
        </a>
    </div>
  )
}

export default Data