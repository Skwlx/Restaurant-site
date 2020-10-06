import React, { useEffect, useState } from "react"
import "../styles/header.scss"


const Header = () => {

    return(
    <header className="header">
      <div>
        <nav>
          <ul className="header-menu">
            <li className="header-menu-item">
              O nas
            </li>
            <li className="header-menu-item">
              Menu
            </li>
            <li className="header-menu-item">
              <h1>
                Mexican Food
              </h1>
            </li>
            <li className="header-menu-item">
              Kontakt
            </li>
            <li className="header-menu-item">
              Social-links
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
