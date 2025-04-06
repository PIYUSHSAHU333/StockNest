import React from 'react';

function Pricing() {
    return (
        <div className="container mb-5 p-3">
          <div className="row mb-5">
            <div className="col-4 col-sm-4">
              <h1 className='mb-5'>Unbeatable pricing</h1>
              <p>We pioneered the concept of discountbroking and price transparency in india. Flat fees and no hidden charges</p>

              <a href=""  style={{textDecoration: "none"}} >See pricing →</a>
            </div>
            <div className="col-2 col-sm-2"></div>
            <div className="col-6 col-sm-6">
                <div className="row text-center">
                  <div className="col border p-3">
                    <h1 className='mb-4'>₹0</h1>
                    <p>Free equity delivery and <br /> direct mutual funds</p>
                  </div>
                  <div className="col border p-3">
                  <h1 className='mb-4'>₹20</h1>
                  <p>Intraday and F&O</p>
                  </div>
                </div>

            </div>
          </div>
        </div>
      );
}

export default Pricing;