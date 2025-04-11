import React, {useState} from 'react';
import WatchlistItem from './WatchlistItem';
import {watchlist} from "../data/data"

function Watchlist() {
    return (

        <div className="watchlist-container">
           <div className="search-container">
            <input
            type="text"
            name='search'
            id='search'
            placeholder='Search eg: infy, bse, nifty ful weekly, gold mcx'
            className='search'
            />
            <span className='
            counts'>{watchlist.length}/50</span>
           </div>

           <ul className='list'>

            {watchlist.map((stock, index)=>{
                return(
                    <WatchlistItem stock={stock} key={index}  />
                )
            })}

           </ul>
        </div>

     );
}

export default Watchlist;