import React, { useState } from 'react';
import bars from './Images/menu1.svg';
import logo from './Images/logo.png';
import './Header.css';


const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
  

    return (
      <nav className='navigation'>
        <div className='logo-and-brand-container'>
          <div className='logo-container'>
          <img src={logo} className="logo" alt='yellow background and black font of heartshaped h and s' />
          </div>

          <div className='brand-name-logo'>
            <a href='/' className='brand-name'>HotSoup</a>
          </div>
        </div>
        <div className='menu-container'>
        <button 
          className='hamburger'
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        > 
        <img src={bars} className="hamburger" alt='three vertical yellow lines'/>        
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
              <a href='/#About'>About</a>
            </li>
            <li onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
              <a href="/#App">App</a>
            </li>
            <li onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}>
              <a href="/#Donate">Donate</a>
            </li>
            <li onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
              <a href="/#Contact">Contact</a>
            </li>
            <li onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}>
              <a href="/#Team">Team</a>
            </li>
          </ul>
        </div>
        </div>
        <div className='download-app-button-container'>
          <button className={
            isNavExpanded ? "download-app-button expanded" : "download-app-button"
          }
          >Download App</button>
        </div>
      </nav>
  
    );
}
export default Header;