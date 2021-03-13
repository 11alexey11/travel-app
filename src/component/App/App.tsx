import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import СountriesList from '../CountriesList/CountriesList';
import GlobalStyle from './GlobalStyle';
import CountryInformation from '../CountryInformation/CountryInformation';

interface AppProps {
  countries: Array<Object>
}

const App: React.FC<AppProps> = ({countries}) => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />

        <Route exact path="/" component={СountriesList} />

        {
          countries.map((item: any, i: number) => (<Route key={item.id} exact path={`/${i}`} render={ () => <CountryInformation country={item} />} />))
        }

        <Footer />
      </Router>
    </>
  )
}

export default App;
