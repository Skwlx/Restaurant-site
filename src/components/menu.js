import React from "react";
import tacoJpg from "../images/taco.jpg";
import tacosJpg from "../images/taco2.jpg"

import "../styles/menu.scss";


const Menu = () => (
    <div className="menuContainer">
        <div className="menu">
            <div className="menuImages">
                <img src={tacoJpg} alt="Taco" />
                <img src={tacosJpg} alt="Taco" />
            </div>
            <div className="menuContent">
                <h2>MENU</h2>
            </div>
        </div> 
    </div>
)

export default Menu;