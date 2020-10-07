import React from "react";
import tacoJpg from "../images/taco.jpg";

import "../styles/menu.scss";


const Menu = () => (
    <div className="menuContainer" id="menu">
        <div className="menu">
            <h2>MENU</h2>
            <div className="menuContent">
                <div className="menuFood" data-aos="fade-right">
                    <ul>
                    <h3>Taco</h3>
                        <li>Lorem 10 zł</li>
                        <li>Lorem 10 zł</li>
                        <li>Lorem 10 zł</li>
                        <li>Lorem 10 zł</li>
                        <li>Lorem 10 zł</li>
                    </ul>
                </div>
                <div className="menuFood" data-aos="fade-right">
                <ul>
                <h3>Burrito</h3>
                    <li>Lorem 12 zł</li>
                    <li>Lorem 12 zł</li>
                    <li>Lorem 12 zł</li>
                    <li>Lorem 12 zł</li>
                    <li>Lorem 12 zł</li>
                </ul>
                </div>
                <div className="menuFood" data-aos="fade-right">
                <ul>
                <h3>Quesadillas</h3>
                    <li>Lorem 14 zł</li>
                    <li>Lorem 14 zł</li>
                    <li>Lorem 14 zł</li>
                    <li>Lorem 14 zł</li>
                    <li>Lorem 14 zł</li>
                </ul>
                </div>
                <div className="menuFood" data-aos="fade-right">
                <ul>
                <h3>Napoje</h3>
                    <li>Lorem 5 zł</li>
                    <li>Lorem 5 zł</li>
                    <li>Lorem 5 zł</li>
                    <li>Lorem 5 zł</li>
                    <li>Lorem 5 zł</li>
                </ul>
            </div>
            <div className="menuFood menuFood-a" data-aos="fade-right">
            <ul>
            <h3>Sosy</h3>
                <li>Lorem 1 zł</li>
                <li>Lorem 1 zł</li>
                <li>Lorem 1 zł</li>
            </ul>
        </div>
            </div>
            <div className="menuImages">
            <img src={tacoJpg} alt="Taco" data-aos="fade-left" />
        </div>
        </div> 
    </div>
)

export default Menu;