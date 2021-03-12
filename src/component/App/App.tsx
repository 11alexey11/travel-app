import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import СountriesList from '../CountriesList/CountriesList';
import GlobalStyle from '../styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />

        <Route exact path="/" component={СountriesList} />

        <Footer />
      </Router>
    </>
  )
}

export default App;
