import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
const GeneralContext = React.createContext(
{
    openBuyWindow:(uid)=>{},
    closeBuyWidnow: () =>{}

}
)


export  const GeneralContextProvider=(props)=>{
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUid, setSelectedStockUid] = useState("");


    const hanldeOpenBuyWindow = (uid) =>{
        setIsBuyWindowOpen(true);
        setSelectedStockUid(uid)
    }

    const handleCloseBuyWindow = ()=>{
        setIsBuyWindowOpen(false);
        setSelectedStockUid("");
    };

    return (
        <GeneralContext.Provider value={{openBuyWindow: hanldeOpenBuyWindow, closeBuyWidnow: handleCloseBuyWindow}}>
                {props.children}
                {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUid}/> }
        </GeneralContext.Provider>
    )
 }

export default GeneralContext;