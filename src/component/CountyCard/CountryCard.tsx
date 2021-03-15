import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './CountryCard.module.css';

import { AppState } from '../../interfaces';
import languages from "../../utils/languages";

interface CountryProps {
  capital: string;
  index: number;
  imgUrl: string;
  key: string;
  language: string;
  name: string;
}

const CountryCard: React.FC<CountryProps> = ({ capital, index, imgUrl, language, name }) => {
  return (
    <Link to={index.toString()} className={styles.countryCard} tabIndex={0}>
      <div className={styles.cardMask}></div>
      <img className={styles.cardImg} src={imgUrl} alt={"Photo of " + name} width="100%" />
      <div className={styles.cardInfoWrapper}>
        <p className={styles.cardTitle}>{name}</p>
        <p className={styles.cardCapital}>{languages.capital[language]}: {capital}</p>
      </div>
    </Link>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    language: state.language
  };
};

export default connect(mapStateToProps)(CountryCard);
