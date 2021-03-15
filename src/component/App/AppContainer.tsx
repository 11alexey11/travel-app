import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../interfaces';
import App from './App';

interface AppContainerProps {
    countries: Array<Object>;
}

const AppContainer: React.FC<AppContainerProps> = ({ countries}) => {
    return <App countries={countries} />;
}

const mapStateToProps = (state: AppState) => {
    return {
      countries: state.countries,
    };
};

export default connect(mapStateToProps)(AppContainer);