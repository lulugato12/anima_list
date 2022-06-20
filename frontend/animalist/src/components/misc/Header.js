import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <h1 className='header-title'>Welcome to AnimaList!</h1>
                    <h2>Start reading</h2>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;