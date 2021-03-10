import React from 'react';

import StyledFooter from '../styles/StyledFooter';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="footer-wrapper">
        <ul>
          <li>
            <a href="https://github.com/11alexey11">11alexey11</a>
          </li>
          <li>
            <a href="https://github.com/alekseishkel">alekseishkel</a>
          </li>
          <li>
            <a href="https://github.com/danila-cmd">danila-cmd</a>
          </li>
          <li>
            <a href="https://github.com/urazof">urazof</a>
          </li>
        </ul>
        <p className="footer-year">© 2021 Travel App</p>
        <div>
          <a href="https://rs.school/js/">
            <img src="../../assets/rs_school.svg" alt="RS School" />
          </a>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer;
