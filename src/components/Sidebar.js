import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

function Sidebar(){
  return ( 
    <>
      <nav className="sidebar">
        <div className="sidebar-container">
          <ul className="sidebar__list">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-logo">
                <img src="../../logo192.png"/>
                <span>На здоровье</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/all-recipes" activeClassName="active" className="nav-links">
                <i class="fas fa-hamburger"></i>
                Все рецепты
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/my-recipes" activeClassName="active" className="nav-links">
                <i class="fas fa-clipboard-list"></i>
                Мои рецепты
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/favourites" activeClassName="active" className="nav-links">
                <i class="fa fa-bookmark" aria-hidden="true"></i>
                Избранное
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Sidebar;