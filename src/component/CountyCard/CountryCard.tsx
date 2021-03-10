import React from 'react';

import StyledCard from '../styles/StyledCard';

interface CountryProps {
  capital: string;
  imgUrl: string,
  key: string,
  name: string
}

const CountryCard: React.FC<CountryProps> = ({ capital, imgUrl, name }) => {
  return (
    <StyledCard>
      <p className="card-title">{name}</p>
      <div className="card-info-wrapper">
        <img className="card-img" src={imgUrl} alt={"Photo of " + name} width="100%" />
        <p className="card-capital">Capital: {capital}</p>
      </div>
    </StyledCard>
  )
}

export default CountryCard;
