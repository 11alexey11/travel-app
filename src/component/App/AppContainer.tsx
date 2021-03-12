import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../interfaces';
import App from './App';

interface AppContainerProps {
    data: Array<Object>
}

const AppContainer: React.FC<AppContainerProps> = ({ data }) => {
    return <App data={data} />;
}

const mapStateToProps = (state: AppState) => {
    return {
        data: state.data
    };
};

export default connect(mapStateToProps)(AppContainer);