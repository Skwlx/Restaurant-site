import React, { useEffect } from "react"
import "../styles/header.scss"


const Header = () => {

    useEffect(() => {
      const hamburgerMenu = document.querySelector('.headerMenuHamburger');
      const menu = document.querySelector('.headerMenu');
      hamburgerMenu.addEventListener('click', () =>{
          menu.classList.toggle('animateMenu')
      }, false)
    });

    return(
    <header className="header">
      <div>
      <h1 className="headerMenuItemLogo">
      <a href="#jumbo">Mexican Food</a>
      </h1>
        <nav>
          <ul className="headerMenu">
            <li className="headerMenuItem">
              <a href="#about">O nas</a>
            </li>
            <li className="headerMenuItem">
            <a href="#menu">Menu</a>
            </li>
            <li className="headerMenuItem">
            <a href="#contact">Kontakt</a>
            </li>
          </ul>
          <div className="headerMenuHamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
