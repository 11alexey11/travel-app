import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CountryInformation from '../CountryInformation/CountryInformation';
import СountriesList from '../CountriesList/CountriesList';
import Footer from '../Footer/Footer';
import GlobalStyle from './GlobalStyle';
import Header from '../Header/Header';
import Loader from '../Loader/Loader.jsx';

interface AppProps {
  data: Array<Object>,
  countries: Array<Object>,
  language: string
}

const App: React.FC<AppProps> = ({ data, countries, language }) => {
  if (data.length === 0 || language === null) {
    return <Loader />
  }

  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />

        <Route exact path="/" component={СountriesList} />

        {
          countries.map((item: any, i: number) => (<Route key={item.id} exact path={`/${i}`} render={() => <CountryInformation country={item} />} />))
        }

        <Footer />
      </Router>
    </>
  )
}

export default App;
