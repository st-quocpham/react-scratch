import React from 'react';
import appIcon from '../../assets/app-icon.png';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-icon">
          <img src={appIcon} alt="App Icon" />
        </div>
        <p className="header-text">Save your TODO</p>
      </div>
    </header>
  );
}

export default Header;
