import React from 'react';
import { connect } from 'react-redux';

import StyledMain from '../styles/StyledMain';
import CountryCard from '../CountyCard/CountryCard';

import { AppState } from '../../interfaces';

interface MainProps {
  data: Array<Object>;
}

const Main: React.FC<MainProps> = ({ data }) => {
  const monthNames: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const date: Date = new Date();

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <StyledMain>
      <div className="cards-title-wrapper">
        <h1 className="cards-title">Top Destinations</h1>
        <p className="cards-description">The most searched countries in {monthNames[date.getMonth()]}</p>
      </div>
      <div className="cards-wrapper">
        {data.map((country: any) => {
          return (
            <CountryCard
              capital={country.capital}
              imgUrl={country.imageUrl}
              key={country.id}
              name={country.name}
            />
          )
        })}
        {data.map((country: any) => {
          return (
            <CountryCard
              capital={country.capital}
              imgUrl={country.imageUrl}
              key={country.id}
              name={country.name}
            />
          )
        })}
        {data.map((country: any) => {
          return (
            <CountryCard
              capital={country.capital}
              imgUrl={country.imageUrl}
              key={country.id}
              name={country.name}
            />
          )
        })}
        {data.map((country: any) => {
          return (
            <CountryCard
              capital={country.capital}
              imgUrl={country.imageUrl}
              key={country.id}
              name={country.name}
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
