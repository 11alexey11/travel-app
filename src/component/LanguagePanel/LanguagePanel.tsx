import React from 'react';
import { connect } from 'react-redux';

import styles from './LanguagePanel.module.css';

import ActionCreator from '../../action-creator/action-creator';
import { AppState } from '../../interfaces';

interface LanguagePanelProps {
  onLanguageChange: (language: string) => void
}


const LanguagePanel: React.FC<LanguagePanelProps> = ({ onLanguageChange }) => {
  const onSelectChange = (evt: React.ChangeEvent<HTMLSelectElement>): void => {
    onLanguageChange(evt.currentTarget.value)
  }

  return (
    <select className={styles.headerLang} name="language" onChange={onSelectChange}>
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
  onLanguageChange: (language: string) => {
    dispatch(ActionCreator.changeLanguage(language));
    dispatch(ActionCreator.getData(language));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguagePanel);