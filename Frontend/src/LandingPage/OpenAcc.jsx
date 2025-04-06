import React from 'react';
import { Link } from 'react-router-dom';
function OpenAcc() {
    return (  
        <div className="container p-5 ">
      <div className="row text-center">
        

        <h1 className="mb-3">Open a stockNest account</h1>
        <p>
         Modern platform and apps, 0 investment, and flat 20 intraday and F&O trades
        </p>
        <Link to="/SignUp">
        <button className="signupBtn btn btn-primary mt-2 p-2 fs-5 mb-5">
          Signup now
        </button>
        </Link>
      </div>
    </div>
    );

}

export default OpenAcc;