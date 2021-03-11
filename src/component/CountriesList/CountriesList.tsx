import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import StyledCountriesList from '../styles/StyledCountriesList';
import CountryCard from '../CountyCard/CountryCard';

import { AppState } from '../../interfaces';

interface MainProps {
  data: Array<Object>;
  history: any
}

const CountriesList: React.FC<MainProps> = ({ data, history }) => {
  const monthNames: string[] = ["Январе", "Феврале", "Марте", "Апреле", "Мае", "Июне",
    "Июле", "Августе", "Сентябре", "Октябре", "Ноябре", "Декабре"];
  const date: Date = new Date();

  const onCountyCardClick = (index: number) => {
    console.log(history);
    
    
  }

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <StyledCountriesList>
      <div className="cards-title-wrapper">
        <h1 className="cards-title">Лучшие направления</h1>
        <p className="cards-description">Наиболее популярные страны в {monthNames[date.getMonth()]}</p>
      </div>
      <div className="cards-wrapper">
        {data.map((country: any, i: number) => {
          return (
            <CountryCard
              capital={country.capital}
              imgUrl={country.photoUrl}
              key={country.id}
              name={country.country}
              onCountyCardClick={() => history.push(`${"/" + i}`)}
            />
          )
        })}
      </div>
    </StyledCountriesList>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    data: state.data
  };
};

export default withRouter(connect(mapStateToProps)(CountriesList));
