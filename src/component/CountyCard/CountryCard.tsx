import React from 'react';

import StyledCard from '../styles/StyledCard';

interface CountryProps {
  capital: string;
  imgUrl: string,
  key: string,
  name: string,
  onCountyCardClick: () => void
}

const CountryCard: React.FC<CountryProps> = ({ capital, imgUrl, name, onCountyCardClick }) => {
  return (
    <StyledCard onClick={onCountyCardClick}>
      <div className="card-mask"></div>
      <img className="card-img" src={imgUrl} alt={"Photo of " + name} width="100%" />
      <div className="card-info-wrapper">
        <p className="card-title">{name}</p>
        <p className="card-capital">Столица: {capital}</p>
      </div>
    </StyledCard>
  )
}

export default CountryCard;
