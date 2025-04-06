import React from "react";
import '../index.css'
function Footer() {
  return (
    <footer>
    <div className="container-fluid bg-light border-top p-5" >
      <div className="row mt-5">
        <div className="col">
          <img
            src="media/images/logo.svg"
            alt=""
            className="mb-3"
            style={{ width: "50%" }}
          />
          <p>
            &copy; 2024-2025, Not StokNest Broking ltd. <br />
            ALl rights reserved
          </p>
        </div>
        <div className="col">
          <p>Company</p>
          
          <a href=""  className="d-inline-block mb-3 FooterSub text-muted">About</a><br />
          
          <a href="" className="d-inline-block mb-3 FooterSub text-muted"> Products</a>
          <br />
          <a href="" className="d-inline-block mb-3 FooterSub text-muted">Pricing</a>
          <br />
          <a href="" className="d-inline-block mb-3 FooterSub text-muted">Referral programme</a>
          <br />
          <a href="" className="d-inline-block mb-3 FooterSub text-muted">Careers</a>
          <br />
          <a href="" className="d-inline-block mb-3 FooterSub text-muted">Zerodha.tech</a>
          <br />
          <a href="" className="d-inline-block mb-3 FooterSub text-muted">Press & media</a>
          <br />
          <a href="" className="d-inline-block mb-3 FooterSub text-muted">Zerodha cares (CSR)</a>
          <br />
          
        </div>
        <div className="col">
          <p>Support</p>
          <a href="" className="d-inline-block mb-3 FooterSub text-muted">Contact</a>
          <a href="" className="d-inline-block mb-3 FooterSub text-muted"> Support portal</a>
          <br />
          <a href="" className="d-inline-block mb-3 FooterSub text-muted">Z-Connect blog</a>
          <br />
          <a href="" className="d-inline-block mb-3 FooterSub text-muted">List of charges</a>
          <br />
          <a href="" className="d-inline-block mb-3 FooterSub text-muted">Downloads & resources</a>
          <br />
        </div>
        <div className="col">
          <p>Account</p>
          <a href="" className="d-inline-block mb-3 FooterSub text-muted">Open an account</a> <br />
          <a href="" className="d-inline-block mb-3 FooterSub text-muted">Fund transfer </a> <br />
          <a href="" className="d-inline-block mb-3 FooterSub text-muted">60 day challenge</a> <br />
        </div>
      </div>
      <div className="mt-5 text-muted" style={{font: "14px"}}>
      <p>
        StockNest Broking Ltd. is a member of NSE and BSE with SEBI Registration
        no.: INZ000031633. CDSL depository services are provided through StockNest
        Securities Pvt. Ltd., which holds SEBI Registration no.: IN-DP-100-2015.
        Commodity trading is offered through StockNest Commodities Pvt. Ltd.,
        registered with MCX (MCX code: 46025) and SEBI Registration no.:
        INZ000038238. The registered address is StockNest Broking Ltd., #153/154,
        4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
        Phase, Bengaluru – 560078, Karnataka, India. For any complaints related
        to securities broking, please write to complaints@StockNest.com, and for
        DP-related queries, contact dp@StockNest.com. Please ensure you carefully
        read the Risk Disclosure Document as prescribed by SEBI | ICF.
      </p>

      <p>
        To file a complaint on SEBI SCORES, register on the SCORES portal.
        Mandatory details for filing complaints on SCORES include Name, PAN,
        Address, Mobile Number, and E-mail ID. Benefits include effective
        communication and speedy redressal of grievances.
      </p>

      <p>
        Investments in the securities market are subject to market risks; read
        all the related documents carefully before investing.
      </p>

      <p>
      "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets – once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of n classname="m-auto"on allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
      </p>
      </div>
      
      <div className="text-center ">
      <a  classname="mx-auto text-muted"href="" style={{marginLeft:"15px", textDecoration:"none"}}>NSE</a> <a classname="mx-auto text-muted" href=""style={{marginLeft:"15px", textDecoration:"none"}}>BSE </a><a classname="mx-auto text-muted" href=""style={{marginLeft:"15px", textDecoration:"none"}}>MCX</a> <a classname="mx-auto text-muted" href=""style={{marginLeft:"15px", textDecoration:"none"}}>Terms & conditions</a> <a classname="mx-auto text-muted" href=""style={{marginLeft:"15px", textDecoration:"none"}}>Policies & procedures</a> <a  classname="mx-auto text-muted"href=""style={{marginLeft:"15px", textDecoration:"none"}}>Privacy police</a> <a classname="mx-auto text-muted" href=""style={{marginLeft:"15px", textDecoration:"none"}}>Disclosure</a>
      </div>


    </div>
    </footer>
  );
}

export default Footer;
