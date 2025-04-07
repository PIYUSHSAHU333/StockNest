import React from 'react';

function Universe() {
    return ( 
        <div className="container">
            <p className='text-center'>Want to know more about our technology stack? check out the StockNest.tech blog.</p>

            <h1 className='text-center mt-5 mb-4'>The StockNest Universe</h1>
            <p className='text-center'>Extend your trading an dinvestment experience even further with our partner platform</p>
            <div className="row mt-5 text-center">
                <div className="col-4 p-3">
                    <img  src="media/images/smallcaseLogo.png" alt="" />
                    <p className='text-muted  fs-8 mt-2'>Themaitic investment platform</p>
                </div>
                <div className="col-4 p-3">
                    <img style={{width:"35%"}}src="media/images/streakLogo.png" alt="" />
                    <p className='text-muted  fs-8 mt-2'>Algo and strategy platform</p>
                </div>
                <div className="col-4 p-3">
                    <img style={{width:"35%"}} src="media/images/sensibullLogo.svg" alt="" />
                    <p className='text-muted  fs-8 mt-2'>Options trading platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img style={{width:"50%"}} src="media/images/zerodhaFundhouse.png" alt="" />
                    <p className='text-muted  fs-8 mt-2'>Asset management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img style={{}}src="media/images/goldenpiLogo.png" alt="" />
                    <p className='text-muted  fs-8 mt-2'>Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img style={{width:"30%"}} src="media/images/dittoLogo.png" alt="" />
                    <p className='text-muted  fs-8 mt-2'>Insurance</p>
                </div>
                <button className="signupBtn btn text-center btn-primary mt-2 p-2 fs-5 mb-5">
            Signup now
          </button>
            </div>
        </div>
     );
}

export default Universe;