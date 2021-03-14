import React from 'react';
import { connect } from 'react-redux';

import styles from './LanguagePanel.module.css';

import ActionCreator from '../../action-creator/action-creator';
import { AppState } from '../../interfaces';

interface LanguagePanelProps {
  changeLanguage: (language: string) => void
}

const LanguagePanel: React.FC<LanguagePanelProps> = ({ changeLanguage }) => {
  return (
    <select className={styles.headerLang} name="language" onChange={(evt) => changeLanguage(evt.currentTarget.value)}>
      <option className={styles.option} value="ru">ru</option>
      <option className={styles.option} value="en">en</option>
      <option className={styles.option} value="fr">fr</option>
    </select>
  )
}
const mapStateToProps = (state: AppState) => {
  return {
    countries: state.countries
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  changeLanguage: (language: string) => {
    dispatch(ActionCreator.changeLanguage(language));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguagePanel);