import React from 'react';

import StyledFooter from '../styles/StyledFooter';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="footer-mask"></div>
      <div className="footer-cutter"></div>
      <div className="authors-wrapper">
        <h2 className="authors-title">Авторы:</h2>
        <ul className="authors">
          <li>
            <a className="author" href="https://github.com/11alexey11">11alexey11</a>
          </li>
          <li>
            <a className="author" href="https://github.com/alekseishkel">alekseishkel</a>
          </li>
          <li>
            <a className="author" href="https://github.com/danila-cmd">danila-cmd</a>
          </li>
          <li>
            <a className="author" href="https://github.com/urazof">urazof</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p className="footer-year">© 2021 Travel App</p>
        <a className="footer-rs-school" href="https://rs.school/js/">
          <img src="./img/rs_school.svg" alt="RS School" width="80px" />
        </a>
      </div>
    </StyledFooter>
  )
}

export default Footer;
