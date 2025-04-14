import React, { useContext, useState } from "react";
import GeneralContext from "/Generalcontext";
import { Link } from "react-router-dom";
import axios from "axios";
const generalContext = useContext(GeneralContext);
function BuyActionWindow({uid}) {

    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0)

    const handleBuyClick = ()=>{
        axios.post("http://localhost:8080/newOrder", {
            name:uid,
            qty: stockQuantity,
            price: stockPrice,
            mode: "BUY"
        })
    }
    const handleCancelClick = ()=>{
        generalContext.closeBuyWindow();
    }

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-orders">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input type="number" name="qty" id="qty" value={stockQuantity} onChange={(e)=>{setStockQuantity(e.target.value)}}/>
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input type="number" name="price" id="price" step="0.05" value={stockPrice} onChange={(e)=>{setStockPrice(e.target.value)}}/>
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}> buy</Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BuyActionWindow;
