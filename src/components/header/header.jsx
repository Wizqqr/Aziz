import React from 'react'
import '../header/header.css'

const Header=()=>{
    return(
        <div className="Header">
            <nav className="Header_nav">
                <li className='Header__menu_li'>Catalog</li>
                <li className='Header__li'>Shop</li>
                <li className='Header__li'>Nike</li>
                <li className='Header__li'>Sneakers</li>
                <li className='Header__li'>History of buy</li>
                <li className="Header_li">Stories</li>
                <li className="Header_li">About us</li>
                <div className="popular">
                <button className="Header_inst"></button>
                <button className="Header_telegram"></button>
                <button className="Header_tiktok"></button>
                </div>
                <button className="Header_button">SignIn</button>
                <button className="Header_button">FAQ</button>
            </nav>
        </div>
    )
}
export default Header