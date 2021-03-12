import ReactDOM from "react-dom";

import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
import thunk from 'redux-thunk';

import ActionCreator from './action-creator/action-creator';
import getData from "./service";
import AppContainer from "./component/App/AppContainer";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f
  )
);

store.dispatch(ActionCreator.getData(getData));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById(`root`));
