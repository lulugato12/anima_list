import React from "react";

import "./Footer.css";

const MenuBar = () => {
  return (
    <footer>
      <div className="footer">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Anime">Anime</a>
          </li>
          <li>
            <a href="/Movies">Movies</a>
          </li>
          <li>
            <a href="/Ovas">OVAS</a>
          </li>
        </ul>

        <p>&copy; AnimaList. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default MenuBar;
