import React from 'react';
import { connect } from 'react-redux';

import StyledMain from '../styles/StyledMain';
import CountryCard from '../CountyCard/CountryCard';

import { AppState } from '../../interfaces';

interface MainProps {
  data: Array<Object>;
}

const Main: React.FC<MainProps> = ({ data }) => {
  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <StyledMain>
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
    </StyledMain>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(Main);
