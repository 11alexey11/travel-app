import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../interfaces';
import App from './App';

interface AppContainerProps {
  data: Array<Object>,
  countries: Array<Object>,
  language: string
}

const AppContainer: React.FC<AppContainerProps> = ({ data, countries, language }) => {
  return <App data={data} countries={countries} language={language} />;
}

const mapStateToProps = (state: AppState) => {
  return {
    data: state.data,
    countries: state.countries,
    language: state.language
  };
};

export default connect(mapStateToProps)(AppContainer);