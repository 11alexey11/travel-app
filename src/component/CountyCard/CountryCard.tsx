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
      <img src={imgUrl} alt={"Photo of " + name} width="100%" />
      <p>Страна: {name}</p>
      <p>Столица: {capital}</p>
    </StyledCard>
  )
}

export default CountryCard;
