import React from 'react';
import { connect } from 'react-redux';

import StyledFooter from './StyledFooter';
import StyledFooterCutter from './StyledFooterCutter';
import styles from './Footer.module.css';

import { AppState } from '../../interfaces';
import languages from "../../utils/languages";

import rsSchool from '../../assets/img/rs_school.svg';

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
          <li className={styles.authorWrapper}>
            <a className={styles.author} href="https://github.com/11alexey11" target="_blank" rel="noreferrer">11alexey11</a>
          </li>
          <li className={styles.authorWrapper}>
            <a className={styles.author} href="https://github.com/alekseishkel" target="_blank" rel="noreferrer">alekseishkel</a>
          </li>
          <li className={styles.authorWrapper}>
            <a className={styles.author} href="https://github.com/danila-cmd" target="_blank" rel="noreferrer">danila-cmd</a>
          </li>
          <li className={styles.authorWrapper}>
            <a className={styles.author} href="https://github.com/urazof" target="_blank" rel="noreferrer">urazof</a>
          </li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerYear}>© 2021 Travel App</p>
        <a className={styles.footerRsSchool} href="https://rs.school/js/">
          <img src={rsSchool} alt="RS School" width="80px" />
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
