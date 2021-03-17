import React from 'react';
import { connect } from 'react-redux';

import styles from './RatingForm.module.css';

import { AppState } from '../../interfaces';
import languages from "../../utils/languages";

import { sendRating } from '../../service';

interface RatingFormProps {
  language: string,
  user: any
}

const getRating = (evt: any) => {
  console.log(evt.target.value);

  sendRating({ name: "Алексей", countryID: 123, score: evt.target.value }).then((data) => console.log(data, 1)
  );
};

const RatingForm: React.FC<RatingFormProps> = ({ user, language }) => {
  return (
    <div className={styles.rating}>
      <h3>{languages.rating[language]}</h3>
      <div>{user.name}</div>
      <form onChange={getRating}>
        <input className={styles.visuallyHidden} name="rating" value="5" id="5-stars" type="radio" />
        <label htmlFor="5-stars" title="perfect">
          <svg width="13" height="12" viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></svg>
        </label>

        <input className={styles.visuallyHidden} name="rating" value="4" id="4-stars" type="radio" />
        <label htmlFor="4-stars" title="good">
          <svg width="13" height="12" viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></svg>
        </label>

        <input className={styles.visuallyHidden} name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" title="not bad">
          <svg width="13" height="12" viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></svg>
        </label>

        <input className={styles.visuallyHidden} name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" title="badly">
          <svg width="13" height="12" viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></svg>
        </label>

        <input className={styles.visuallyHidden} name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" title="terribly">
          <svg width="13" height="12" viewBox="0 0 13 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></svg>
        </label>
      </form>

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


