import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        <h3 className=" mb-4 text-left">
          To create a ticket, select a relevant topic
        </h3>
        <div className="col-4 p-5">
          <h5 className="mb-5">
            <i class="fa-solid fa-circle-plus"> </i> Account opening
          </h5>
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Online Account Opening{" "}
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Offline Account Opening
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            {" "}
            Company, Partnership and HUF Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            NRI Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Charges at StockNest
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            StockNest IDFC FIRST Bank 3-in-1 Account
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Getting Started
          </a>
          <br />
        </div>
        <div className="col-4 p-5">
          <h5 className="mb-5">
            <i class="fa-solid fa-user"></i> Your StockNest Account
          </h5>
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Login Credentials{" "}
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Account Modification and Segment Addition
          </a>{" "}
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            DP ID and bank details
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Your Profile
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2" }}>
            Transfer and conversion of shares
          </a>{" "}
          <br />{" "}
        </div>
        <div className="col-4 p-5">
        <h5 className="mb-5">
        <i class="fa-solid fa-chart-column"></i> Your trades
          </h5>

                        
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Margin/leverage, Product and Order types</a> <br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Kite Web and Mobile</a> <br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Trading FAQS</a> <br />
                <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Corporate Actions</a> <br />
        </div>

        <div className="col-4 p-5">
        <h5 className="mb-5">
        <i class="fa-solid fa-credit-card"></i> Funds
          </h5>

               
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Adding Funds </a> <br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Fund Withdrawal </a> <br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>eMandates </a> <br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Adding Bank Accounts </a> <br />
        </div>

        <div className="col-4 p-5">
        <h5 className="mb-5">
        <i class="fa-solid fa-circle-notch"></i> console
          </h5>

                        
                        <a href=""style={{textDecoration:"none", lineHeight:"2"}}>Reports </a> <br />
                        <a href=""style={{textDecoration:"none", lineHeight:"2"}}>Ledger </a> <br />
                        <a href=""style={{textDecoration:"none", lineHeight:"2"}}>Portfolio </a> <br />
                       <a href=""style={{textDecoration:"none", lineHeight:"2"}}> 60 Day Challenge </a> <br />
                        <a href=""style={{textDecoration:"none", lineHeight:"2"}}>IPO </a> <br />
                        <a href=""style={{textDecoration:"none", lineHeight:"2"}}>Referral Program </a> <br />
        </div>

        <div className="col-4 p-5">
        <h5 className="mb-5">
        <i class="fa-solid fa-coins"></i>coin
          </h5>

                        
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Understanding Mutual Funds</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>About Coin</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Buying and Selling through Coin</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Starting an SIP</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Managing your Portfolio</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Coin App</a><br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
