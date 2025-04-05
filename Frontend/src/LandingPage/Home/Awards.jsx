import React from 'react';

function Awards() {
    return (
        <div className="container mt-5">

          <div className="row">
            <div className="col-lg-6 col-sm-3" >
              <img src="media/images/largestBroker.svg" className="mt-4" alt="#" />
            </div>
            <div className="col-lg-6 col-sm-3 mt-5" >
              <h1>Largest stock broker in India</h1>
              <p>2 million + StockNest clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
              <div className="row mt-5">
                <div className="col-6">
                  <ul>
                    <li><p>Future and options</p></li>
                    <li><p>Commodity derivatives</p></li>
                    <li><p>Cirrency derivatives</p></li>
                  </ul>
                </div>
                <div className="col-6">
                <ul>
                    <li><p>Stock & IPOs</p></li>
                    <li><p>Direct mutual funds</p></li>
                    <li><p>Bonds and Govt. security</p></li>
                  </ul>
                </div>
              </div>
              <img className='mt-4' src="media\images\pressLogos.png" alt="#" />
            </div>
            
          </div>
          

        </div>
      );
}

export default Awards;