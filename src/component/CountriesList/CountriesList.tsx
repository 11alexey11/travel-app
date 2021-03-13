import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './CountriesList.module.css';
import CountryCard from '../CountyCard/CountryCard';

import { AppState } from '../../interfaces';

interface CountriesProps {
  countries: Array<Object>;
  history: any
}

const CountriesList: React.FC<CountriesProps> = ({ countries, history }) => {
  const monthNames: string[] = ["Январе", "Феврале", "Марте", "Апреле", "Мае", "Июне",
    "Июле", "Августе", "Сентябре", "Октябре", "Ноябре", "Декабре"];
  const date: Date = new Date();

  // add loader

  if (countries === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.countriesList}>
      <div className={styles.cardsTitleWrapper}>
        <h1 className={styles.cardsTitle}>Лучшие направления</h1>
        <p className={styles.cardsDescription}>Наиболее популярные страны в {monthNames[date.getMonth()]}</p>
      </div>
      <div className={styles.cardsWrapper}>
        {countries.map((country: any, i: number) => {
          return (
            <CountryCard
              capital={country.capital}
              imgUrl={country.photoUrl}
              key={country.id}
              name={country.country}
              onCountyCardClick={() => history.push(`/${i}`)}
            />
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    countries: state.countries
  };
};

export default withRouter(connect(mapStateToProps)(CountriesList));
