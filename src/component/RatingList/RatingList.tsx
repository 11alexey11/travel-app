import React from 'react';
import { connect } from 'react-redux';

import Stars from '../Stars/Stars';

import styles from './RatingList.module.css';

import { AppState } from '../../interfaces';
import languages from "../../utils/languages";

type Country = {
  id: string
}

interface RatingFormProps {
  country: Country;
  language: string,
  ratings: Array<Object>
}

const RatingForm: React.FC<RatingFormProps> = ({ country, ratings, language }) => {
  return (
    <div className={styles.ratingList}>
      <h3>{languages.ratings[language]}:</h3>
      {
        ratings.map((user: any) => {
          return user.rating.map((rating: any) => {
            if (rating.countryId === country.id && rating.score <= 5) {
              return (
                <div key={rating._id} className={styles.userRating}>
                  <p>{user.name}</p>
                    <Stars rating={rating.score.toString()}/>
                </div>
              )
            }

          })
        })
      }
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    language: state.language,
    ratings: state.ratings
  };
};

export default connect(mapStateToProps)(RatingForm);


