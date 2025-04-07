import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row border-bottom mt-5 text-center">
        <h1 className="fs-2">Pricing</h1>
        <h3 className="text-muted fs-5 mt-4 mb-5">
          Free equity investment anf flat ₹20 traday and F&O trades
        </h3>
      </div>

      <div className="row text-center mt-5 p-3 fs-6">
        <div className="col-4">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h1 className="fs-2 ">Free Equity delivery</h1>
          <p className="mt-3 text-muted">
            All equity delivery investments(NSE, BSE), <br /> are absolutely
            free - ₹0 brokerage{" "}
          </p>
        </div>
        <div className="col-4 ">
          <img src="media/images/intradayTrades.svg" alt="" />
          <h1 className="fs-2">Intraday and F&O trades</h1>
          <p className="mt-3 text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h1 className="fs-2">Free direct MF</h1>
          <p className="mt-3 text-muted">
            All direct mutual fund investment are absolutely free - ₹0 commissions and DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
