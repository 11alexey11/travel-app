import React from 'react';
import { connect } from 'react-redux';

import Stars from '../Stars/Stars';

import styles from './RatingForm.module.css';

import { AppState } from '../../interfaces';
import languages from "../../utils/languages";

import { sendRating } from '../../service';

type Country = {
  id: string
}

interface RatingFormProps {
  country: Country;
  language: string,
  user: any
}

const RatingForm: React.FC<RatingFormProps> = ({ user, language, country }) => {
  const getRating = (evt: any) => {
    sendRating({
      "name": user.name,
      "rating": {
        "countryId": country.id,
        "score": evt.target.value
      }
    });
  };

  if (user.name === undefined) {
    return null;
  }
    
  return (
    <div className={styles.rateSights}>
      <h3 className={styles.rateSightsTitle}>{languages.rateSights[language]}:</h3>
      <div>{user.name}</div>
      <Stars getRating={getRating}/>
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    language: state.language,
    user: state.user
  };
};

export default connect(mapStateToProps)(RatingForm);


