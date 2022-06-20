import React from 'react'
import { Link } from "react-router-dom"

import './Footer.css'

const MenuBar = () => {
    return (
        <footer >
            <div className="footer">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link href="/Anime">Anime</Link></li>
                    <li><Link to="/Movies">Movies</Link></li>
                    <li><Link to="/Ovas">OVAS</Link></li>
                </ul>

                <p>&copy; AnimaList. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default MenuBar;