import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './CountriesList.module.css';
import CountryCard from '../CountyCard/CountryCard';

import { AppState } from '../../interfaces';
import languages from "../../utils/languages";

interface CountriesProps {
  countries: Array<Object>;
  history: any,
  language: string
}

const CountriesList: React.FC<CountriesProps> = ({ countries, history, language }) => {
  const getMonth = () => {
    let monthes: string[] = [];
    const date: Date = new Date();
    const monthNamesRu: string[] = ["Январе", "Феврале", "Марте", "Апреле", "Мае", "Июне",
      "Июле", "Августе", "Сентябре", "Октябре", "Ноябре", "Декабре"];
    const monthNamesEn: string[] = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const monthNamesFr: string[] = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    if (language === "ru") {
      monthes = monthNamesRu;
    }

    if (language === "en") {
      monthes = monthNamesEn;
    }

    if (language === "fr") {
      monthes = monthNamesFr;
    }

    return monthes[date.getMonth()]
  }

  return (
    <div className={styles.countriesList}>
      <div id="cardsTitleWrapper" className={styles.cardsTitleWrapper}>
        <h1 className={styles.cardsTitle}>{languages.cardsTitle[language]}</h1>
        <p className={styles.cardsDescription}>{languages.cardsDescription[language]} {getMonth()}</p>
      </div>
      <div className={styles.cardsWrapper}>
        {countries.map((country: any, i: number) => {
          return (
            <CountryCard
              capital={country.capital}
              imgUrl={country.photoUrl}
              index={i}
              key={country.id}
              name={country.country}
            />
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    countries: state.countries,
    language: state.language
  };
};

export default withRouter(connect(mapStateToProps)(CountriesList));
