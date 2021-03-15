import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../interfaces';
import App from './App';

interface AppContainerProps {
  countries: Array<Object>,
  language: string
}

const AppContainer: React.FC<AppContainerProps> = ({ countries, language }) => {
  return <App countries={countries} language={language} />;
}

const mapStateToProps = (state: AppState) => {
  return {
    countries: state.countries,
    language: state.language
  };
};

export default connect(mapStateToProps)(AppContainer);