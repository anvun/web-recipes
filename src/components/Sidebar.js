import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
        <h3>Logo</h3>
        <ul className="sidebar__list">
          <Link to='/all-recipes'>
            <li>Все рецепты</li>
          </Link>
          <Link to='/my-recipes'>
            <li>Мои рецепты</li>
          </Link>
          <Link to='/favourites'>
            <li>Избранное</li>
          </Link>
        </ul>
    </aside>
  );
}

export default Sidebar;
