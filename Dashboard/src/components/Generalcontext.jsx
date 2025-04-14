import React, { useState } from "react";
const GeneralContext = React.createContext(
{
    openBuyWindow:(uid)=>{},
    closeBuyWidnow: () =>{}

}
)


export  const generalContextProvider=(props)=>{
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUid, setSelectedStockUid] = useState("");


    const hanldeOpenBuyWindow = (uid) =>{
        setIsBuyWindowOpen(true);
        selectedStockUid(uid)
    }

    const handleCloseBuyWindow = ()=>{
        setIsBuyWindowOpen(false);
        setSelectedStockUid("");
    };

    return (
        <generalContext.Provider value={{openBuyWindow: hanldeOpenBuyWindow, closeBuyWidnow: handleCloseBuyWindow}}>
                {props.children}
                {isBuyWindowOpen }
        </generalContext.Provider>
    )
 }

export default GeneralContext;