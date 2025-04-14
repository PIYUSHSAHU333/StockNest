import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Holdings from './Holdings';
import Watchlist from './Watchlist';
import Orders from './Orders';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './Apps';
import Summary from './Summary'
import {GeneralContextProvider} from "./temporary";
function Dashboard() {
    return ( 
        <div className="dashboard-container">

            <GeneralContextProvider>
                <Watchlist/>
            </GeneralContextProvider>
                <div className="content" >
                    
                    <Routes>
                        <Route path='/' element={<Summary/>}></Route>
                        <Route path='/holdings' element={<Holdings/>}></Route>
                        <Route path='/orders' element={<Orders/>}></Route>
                        <Route path='/positions' element={<Positions/>}></Route>
                        <Route path='/funds' element={<Funds/>}></Route>
                        <Route path='/apps' element={<Apps/>}></Route>
                    </Routes>
                    

                </div>

        </div>
     );
}

export default Dashboard;