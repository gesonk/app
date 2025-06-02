import React from 'react'

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
            <svg 
                width="32" 
                height="32" 
                class="home__scroll-mouse" 
                viewBox="0 0 247 390" 
                xmlns="http://www.w3.org/2000/svg" 
                style={{
                    fillRule: "evenodd", 
                    clipRule: "evenodd", 
                    strokeLinecap: "round", 
                    strokeLinejoin: "round", 
                    strokeMiterlimit: "1.5",
                }}>
                <path 
                class="wheel" 
                d="M123.359 79.775v72.843" 
                
                style = {{
                    fill:"none", 
                    stroke:"var(--title-color)",
                    strokeWidth:"20",
                }}   />
                
                <path d="M236.717 123.359C236.717 60.794 185.923 10 123.359 10 60.794 10 10 60.794 10 123.359v143.237c0 62.565 50.794 113.359 113.359 113.359 62.564 0 113.358-50.794 113.358-113.359V123.359z" 
                style = {{
                    fill:"none", 
                    stroke:" var(--title-color)",
                    strokeWidth:"20",
                }}   

                />
            </svg>
            <span className="home__scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
    </div>
  )
}

export default ScrollDown