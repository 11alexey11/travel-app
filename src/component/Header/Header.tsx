import React from 'react';

import StyledHeader from '../styles/StyledHeader';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className="header-text-wrapper">
        <p className="header-title">Travel App</p>
        <p className="header-slogan">Discover. Explore. Admire.</p>
      </div>
      <div className="header-cutter">
      </div>
    </StyledHeader>
  )
}

export default Header;
