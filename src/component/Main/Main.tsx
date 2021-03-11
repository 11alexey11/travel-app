import React from 'react';
import { connect } from 'react-redux';

import StyledMain from '../styles/StyledMain';
import CountryCard from '../CountyCard/CountryCard';

import { AppState } from '../../interfaces';

interface MainProps {
  data: Array<Object>;
}

const Main: React.FC<MainProps> = ({ data }) => {
  const monthNames: string[] = ["Январе", "Феврале", "Марте", "Апреле", "Мае", "Июне",
    "Июле", "Августе", "Сентябре", "Октябре", "Ноябре", "Декабре"];
  const date: Date = new Date();

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <StyledMain>
      <div className="cards-title-wrapper">
        <h1 className="cards-title">Лучшие направления</h1>
        <p className="cards-description">Наиболее популярные страны в {monthNames[date.getMonth()]}</p>
      </div>
      <div className="cards-wrapper">
        {data.map((country: any) => {
          return (
            <CountryCard
              capital={country.capital}
              imgUrl={country.photoUrl}
              key={country.id}
              name={country.country}
            />
          )
        })}
      </div>
    </StyledMain>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(Main);
