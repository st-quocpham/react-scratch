import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-search">
          <input className="header-input input-reset" type="text" placeholder="Your search..." />
          <button className="header-btn btn-reset" title="Search">
            <i className="fas fa-search icon" />
          </button>
        </div>
        <p className="header-text">Notes</p>
      </div>
    </header>
  );
}

export default Header;
