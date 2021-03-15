import React from 'react';
import { connect } from 'react-redux';

import styles from './CountryCard.module.css';

import { AppState } from '../../interfaces';
import languages from "../../utils/languages";

interface CountryProps {
  capital: string;
  imgUrl: string,
  key: string,
  language: string
  name: string,
  onCountyCardClick: () => void
}

const CountryCard: React.FC<CountryProps> = ({ capital, imgUrl, language, name, onCountyCardClick }) => {
  return (
    <div className={styles.countryCard} onClick={onCountyCardClick}>
      <div className={styles.cardMask}></div>
      <img className={styles.cardImg} src={imgUrl} alt={"Photo of " + name} width="100%" />
      <div className={styles.cardInfoWrapper}>
        <p className={styles.cardTitle}>{name}</p>
        <p className={styles.cardCapital}>{languages.capital[language]}: {capital}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    language: state.language
  };
};

export default connect(mapStateToProps)(CountryCard);
