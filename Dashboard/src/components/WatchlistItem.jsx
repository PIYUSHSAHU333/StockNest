import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined,KeyboardArrowUp, KeyboardArrowDown, MoreHoriz } from "@mui/icons-material";
function WatchlistItem({ stock }) {
  let [showWatchListAction, setShowWatchListAction] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListAction(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchListAction(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span>{stock.price}</span>
        </div>
      </div>
      {showWatchListAction && <WatchlistActions uid={stock.name} />}
    </li>
  );
}

const WatchlistActions = ({ uid }) => {
  return (
    <span className="actions">
      <span style={{display:"flex"}}>
        <Tooltip title="Buy" arrow placement="top" slots={{ transition: Grow }}>
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip title="sell" arrow placement="top" slots={{transition: Grow}}>
            <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics"
          placement="top"
          arrow
          slots={{transition: Grow}}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip
          title="more"
          placement="top"
          arrow
          slots={{transition: Grow}}
        >
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

export default WatchlistItem;
