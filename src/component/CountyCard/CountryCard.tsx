import React from 'react';

import styles from './CountryCard.module.css';

interface CountryProps {
  capital: string;
  imgUrl: string,
  key: string,
  name: string,
  onCountyCardClick: () => void
}

const CountryCard: React.FC<CountryProps> = ({ capital, imgUrl, name, onCountyCardClick }) => {
  return (
    <div className={styles.countryCard} onClick={onCountyCardClick}>
      <div className={styles.cardMask}></div>
      <img className={styles.cardImg} src={imgUrl} alt={"Photo of " + name} width="100%" />
      <div className={styles.cardInfoWrapper}>
        <p className={styles.cardTitle}>{name}</p>
        <p className={styles.cardCapital}>Столица: {capital}</p>
      </div>
    </div>
  )
}

export default CountryCard;
