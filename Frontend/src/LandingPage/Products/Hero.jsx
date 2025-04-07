import React from 'react';

function Hero() {
    return (
        <div className="container mt-5 p-3 border-bottom">
          <div className="row text-center mt-4 mb-5 ">
                  <h1 className='mb-3'>Technology</h1>
                  <p className='mb-3 fs-5 text-muted'>Sleek, modern and intuitive trading platform</p>
                    <p className='fs-8 mb-5' >Check out our <a style={{textDecoration:"none"}} href=""> investment offerings →</a> </p>
          </div>
        </div>
      );
}

export default Hero;