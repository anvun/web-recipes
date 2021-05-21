import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { Context } from '../index';
import { privateRoutes, publicRoutes } from '../Routes';

const Sidebar = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth)

  return ( 
    <>
      <nav className="sidebar">
        <div className="sidebar-container">
          <div className="nav-logo">
            <img src="../../logo192.png" alt="logo"/>
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

            {user != null && 
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
                Аккаунт
              </NavLink>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  )
}

export default Sidebar;