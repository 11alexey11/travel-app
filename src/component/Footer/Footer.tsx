import React from 'react';
import { connect } from 'react-redux';

import StyledFooter from './StyledFooter';
import StyledFooterCutter from './StyledFooterCutter';
import styles from './Footer.module.css';

import { AppState } from '../../interfaces';
import languages from "../../utils/languages";

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <StyledFooter>
      <div className={styles.footerMask}></div>
      <StyledFooterCutter />
      <div className={styles.authorsWrapper}>
        <h2 className={styles.authorsTitle}>{languages.authors[language]}:</h2>
        <ul className={styles.authors}>
          <li>
            <a className={styles.author} href="https://github.com/11alexey11">11alexey11</a>
          </li>
          <li>
            <a className={styles.author} href="https://github.com/alekseishkel">alekseishkel</a>
          </li>
          <li>
            <a className={styles.author} href="https://github.com/danila-cmd">danila-cmd</a>
          </li>
          <li>
            <a className={styles.author} href="https://github.com/urazof">urazof</a>
          </li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerYear}>© 2021 Travel App</p>
        <a className={styles.footerRsSchool} href="https://rs.school/js/">
          <img src="./img/rs_school.svg" alt="RS School" width="80px" />
        </a>
      </div>
    </StyledFooter>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    language: state.language
  };
};

export default connect(mapStateToProps)(Footer);
