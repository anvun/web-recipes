import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../Routes';

const Sidebar = () => {
  const user = false; 

  return ( 
    <>
      <nav className="sidebar">
        <div className="sidebar-container">
          <div className="nav-logo">
            <img src="../../logo192.png"/>
            <span>На здоровье</span>
          </div>

          <ul className="sidebar__list">
            {publicRoutes.map(({path, Component, title, icon}) =>
              <li className="nav-item">
                <NavLink exact to={path} activeClassName="active" className="nav-links">
                  <i class={icon}></i>
                  {title}
                </NavLink>
              </li>
            )}

            {user == 1 && 
              <>
                {privateRoutes.map(({path, Component, title, icon}) =>
                  <li className="nav-item">
                    <NavLink exact to={path} activeClassName="active" className="nav-links">
                      <i class={icon}></i>
                      {title}
                    </NavLink>
                  </li>
                )}
              </>
            }
            
            <li className="nav-item">
              <NavLink exact to="/login" activeClassName="active" className="nav-links">
                <i class="fas fa-user"></i>
                {user ?
                  <span>Выйти</span>
                  : 
                  <span>Войти</span>
                }
              </NavLink>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  )
}

export default Sidebar;